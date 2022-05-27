import { Button, TextField, Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "../../src/store";

const AuthHome: NextPage = () => {
  const isDark = useAppSelector((state) => state.mode.isDark);
  const user = useAppSelector((state) => state.user);
  const [isLogin, setIsLogin] = useState(true);
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
