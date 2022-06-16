import "@/styles/globals.css";
import "@/styles/reset.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutComponent from "@/components/layout/layout";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <Provider store={store}>
          <Hydrate state={pageProps.dehydratedState}>
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </Hydrate>
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
