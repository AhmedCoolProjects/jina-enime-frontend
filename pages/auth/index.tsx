import { Button, TextField, Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { loginAction, useAppDispatch, useAppSelector } from "../../src/store";
import { useMutation } from "react-query";
import { appAxios } from "../../src/axios";
import { useSnackbar, VariantType } from "notistack";
import { useRouter } from "next/router";

const AuthHome: NextPage = () => {
  const isDark = useAppSelector((state) => state.mode.isDark);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  function handleShowSnackbar(variant: VariantType, message: string) {
    enqueueSnackbar(message, { variant });
  }
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [userRegister, setUserRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    room_number: "",
    password: "",
  });
  const handleAuth = () => {
    setIsLogin(!isLogin);
    setUserLogin({
      email: "",
      password: "",
    });
    setUserRegister({
      first_name: "",
      last_name: "",
      email: "",
      room_number: "",
      password: "",
    });
  };
  const { mutate: mutateStudentLogin, isLoading: isStudentLoginLoading } =
    useMutation(async () => {
      return await appAxios
        .post("/student/login", {
          email: userLogin.email,
          password: userLogin.password,
        })
        .then(async (res) => {
          if (res.data) {
            appAxios.defaults.headers.common[
              "Authorization"
            ] = `JWT ${res.data.token}`;
            localStorage.setItem("token", res.data.token);
            await appAxios.post("/student/profile").then((res) => {
              if (res.data) {
                dispatch(
                  loginAction({
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    email: res.data.email,
                    room_number: res.data.room_number,
                    token: res.data.token,
                    _id: res.data._id,
                  })
                );
                handleShowSnackbar("success", `Welcome ${res.data.first_name}`);
                router.replace("/");
              }
            });
          }
        })
        .catch((err) => {
          console.log(err.response?.data?.message || err);
          if (err.response?.data?.message) {
            handleShowSnackbar("error", err.response.data.message);
          }
        });
    });

  return (
    <div>
      <Head>
        <title>{isLogin ? "Login" : "Register"} | MY APP</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="my-8 relative w-[180px] h-[180px]">
          <Image
            src="/favicon.ico"
            objectFit="contain"
            layout="fill"
            className="rounded-full"
            alt="Logo"
          />
        </div>
        <h1 className="text-3xl font-bold">{isLogin ? "Login" : "Register"}</h1>
        <Container maxWidth="sm">
          <div className="flex w-full mt-5 flex-col items-center space-y-3">
            {isLogin ? (
              <div className="flex flex-col w-full space-y-3">
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  color={isDark ? "primary" : "secondary"}
                  variant="outlined"
                  value={userLogin.email}
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, email: e.target.value })
                  }
                />
                <TextField
                  margin="dense"
                  id="password"
                  label="Mot de passe"
                  type="password"
                  fullWidth
                  color={isDark ? "primary" : "secondary"}
                  variant="outlined"
                  value={userLogin.password}
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, password: e.target.value })
                  }
                />
              </div>
            ) : (
              <div className="flex flex-col w-full space-y-3">
                <TextField
                  autoFocus
                  margin="dense"
                  id="first_name"
                  label="Prénom"
                  type="text"
                  fullWidth
                  color={isDark ? "primary" : "secondary"}
                  variant="outlined"
                  value={userRegister.first_name}
                  onChange={(e) =>
                    setUserRegister({
                      ...userRegister,
                      first_name: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="dense"
                  id="last_name"
                  label="Nom"
                  type="text"
                  fullWidth
                  color={isDark ? "primary" : "secondary"}
                  variant="outlined"
                  value={userRegister.last_name}
                  onChange={(e) =>
                    setUserRegister({
                      ...userRegister,
                      last_name: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  color={isDark ? "primary" : "secondary"}
                  variant="outlined"
                  value={userRegister.email}
                  onChange={(e) =>
                    setUserRegister({ ...userRegister, email: e.target.value })
                  }
                />
                <TextField
                  margin="dense"
                  id="room_number"
                  label="Numéro de chambre"
                  type="text"
                  fullWidth
                  color={isDark ? "primary" : "secondary"}
                  variant="outlined"
                  value={userRegister.room_number}
                  onChange={(e) =>
                    setUserRegister({
                      ...userRegister,
                      room_number: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="dense"
                  id="password"
                  label="Mot de passe"
                  type="password"
                  fullWidth
                  color={isDark ? "primary" : "secondary"}
                  variant="outlined"
                  value={userRegister.password}
                  onChange={(e) =>
                    setUserRegister({
                      ...userRegister,
                      password: e.target.value,
                    })
                  }
                />
              </div>
            )}
            <Button
              size="large"
              style={{
                marginTop: 25,
              }}
              fullWidth
              variant="outlined"
              color={isDark ? "primary" : "secondary"}
              onClick={() => {
                mutateStudentLogin();
              }}
              disabled={
                isLogin
                  ? !userLogin.email || !userLogin.password
                  : !userRegister.first_name ||
                    !userRegister.last_name ||
                    !userRegister.email ||
                    !userRegister.room_number ||
                    !userRegister.password
              }
            >
              {isLogin ? "Login" : "Register"}
            </Button>
            <div className="w-full flex flex-row items-center justify-end">
              <Button
                onClick={handleAuth}
                size="small"
                color={isDark ? "primary" : "secondary"}
              >
                {isLogin ? "Register?" : "Login?"}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AuthHome;
