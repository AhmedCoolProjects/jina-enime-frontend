import { Button, IconButton, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { changeModeAction, useAppDispatch, useAppSelector } from "../../store";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export function Header() {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);
  const toggleTheme = () => {
    dispatch(changeModeAction());
    localStorage.setItem("isDark", `${!isDark}`);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className="w-full sticky top-2 rounded-full z-10 py-3 px-4 items-center justify-between flex flex-row">
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
        <IconButton
          className="md:hidden"
          aria-controls={open ? "menu-id" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleOpenMenu}
          id="menu-button-id"
        >
          <FiMenu color={isDark ? "#ffff00" : "#1544ed"} />
        </IconButton>
      </div>
      {/* <PopMenu
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        id="menu-id"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        items={[
          {
            label: "Dashboard",
            href: "/",
          },
          {
            label: "Projects",
            href: "/projects",
          },
          {
            label: "Certificates",
            href: "/certificates",
          },
        ]}
        buttonId="menu-button-id"
      /> */}
    </Paper>
  );
}
