import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { THEME } from "../../constants";
import { changeModeAction, useAppDispatch, useAppSelector } from "../../store";
import { Footer } from "./Footer";
import { Header } from "./Header";

type props = {
  children: React.ReactNode;
};

export function Layout(props: props) {
  const { children } = props;

  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);

  useEffect(() => {
    const isDarkLocal = localStorage.getItem("isDark");
    if (isDarkLocal !== null && isDarkLocal !== `${isDark}`) {
      dispatch(changeModeAction());
      console.log("appModeLocal", isDarkLocal);
      console.log("appMode", isDark);
    }
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    [isDark]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}