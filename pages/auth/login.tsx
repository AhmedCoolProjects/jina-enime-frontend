import { Button, TextField } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { SiMicrosoftoffice } from "react-icons/si";
import Image from "next/image";
import {
  changeModeAction,
  useAppDispatch,
  useAppSelector,
} from "../../src/store";

const LoginHome: NextPage = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);
  const toggleTheme = () => {
    dispatch(changeModeAction());
    localStorage.setItem("isDark", `${!isDark}`);
  };
  return (
    <div>
      <Head>
        <title>Login | My APP</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/vercel.svg"
          width={280}
          height={280}
          objectFit="contain"
          className="rounded-full"
          alt="Logo"
        />
        <h1 className="text-3xl font-bold">Login</h1>
        <div className="flex w-full mt-5 flex-col items-center space-y-3">
          <TextField type="email" fullWidth label="Email" variant="outlined" />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
          />
          <Button
            size="large"
            style={{
              marginTop: 25,
            }}
            fullWidth
            variant="outlined"
            color={isDark ? "primary" : "secondary"}
            endIcon={<SiMicrosoftoffice color="red" />}
          >
            Login with Office
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginHome;
