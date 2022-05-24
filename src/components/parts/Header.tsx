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
    <Paper className="w-full sticky top-0 z-10 p-3 items-center justify-between flex flex-row">
      <Link href="/" passHref>
        <div className="flex cursor-pointer flex-row items-center space-x-2">
          {/* <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
            <Image
              src="/images/logo.png"
              className="rounded-full"
              objectFit="cover"
              alt="logo"
              layout="fill"
            />
          </div> */}
          <h1 className="text-xl sm:text-2xl font-bold">Ahmed Bargady</h1>
        </div>
      </Link>
      <div className="flex flex-row items-center space-x-2">
        <div
          className="hidden md:flex
        flex-row items-center space-x-4"
        >
          {/* <Link href="/#bio" passHref>
            <Button color={isDark ? "secondary" : "primary"}>Bio</Button>
          </Link>
          <Link href="/projects" passHref>
            <Button color={isDark ? "secondary" : "primary"}>Projects</Button>
          </Link>
          <Link href="/certificates" passHref>
            <Button color={isDark ? "secondary" : "primary"}>
              Certificates
            </Button>
          </Link> */}
          {/* <Link href="/learning-path" passHref>
            <Button color={isDark ? "secondary" : "primary"}>Learning Path</Button>
          </Link> */}
        </div>
        <div
          style={{
            display: "inline-block",
          }}
        >
          <IconButton onClick={toggleTheme}>
            {isDark ? <BsSun color="yellow" /> : <BsMoonStars color="purple" />}
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
          <FiMenu color={isDark ? "yellow" : "purple"} />
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
