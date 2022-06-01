import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../src/components";
import { Provider } from "react-redux";
import { appStore } from "../src/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
