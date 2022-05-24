import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../src/components";
import { Provider } from "react-redux";
import { appStore } from "../src/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
