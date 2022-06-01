import { Button, IconButton, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { changeModeAction, useAppDispatch, useAppSelector } from "../../store";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { FiMenu, FiUser } from "react-icons/fi";
import { PopperProfile } from "../dialogs";

export function Header() {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);
  const user = useAppSelector((state) => state.user);
  const toggleTheme = () => {
    dispatch(changeModeAction());
    localStorage.setItem("isDark", `${!isDark}`);
  };
  // Popper
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleOpenPopper = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  function handleClosePopper() {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <Paper
      className="w-full sticky top-2 z-10 py-3 px-4 items-center justify-between flex flex-row"
      style={{
        borderRadius: 200,
      }}
    >
      <Link href="/" passHref>
        <div className="flex cursor-pointer flex-row items-center space-x-2">
          <Image
            src="/favicon.ico"
            className="rounded-full"
            objectFit="cover"
            alt="logo"
            width={40}
            height={40}
          />
        </div>
      </Link>
      <div className="flex flex-row items-center space-x-2">
        {user._id !== "" ? (
          <div
            style={{
              display: "inline-block",
            }}
          >
            <IconButton onClick={handleOpenPopper}>
              <FiUser color={isDark ? "#ffff00" : "#1544ed"} />
            </IconButton>
          </div>
        ) : null}
        <div
          style={{
            display: "inline-block",
          }}
        >
          <IconButton onClick={toggleTheme}>
            {isDark ? (
              <BsSun color="#ffff00" />
            ) : (
              <BsMoonStars color="#1544ed" />
            )}
          </IconButton>
        </div>
        {/* <div className="md:hidden">
          <IconButton
            aria-controls={open ? "menu-id" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpenMenu}
            id="menu-button-id"
          >
            <FiMenu color={isDark ? "#ffff00" : "#1544ed"} />
          </IconButton>
        </div> */}
      </div>
      <PopperProfile
        onClose={() => handleClosePopper()}
        open={open}
        anchorEl={anchorEl}
      />
    </Paper>
  );
}
