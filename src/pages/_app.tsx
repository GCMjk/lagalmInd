import "../styles/globals.css";
import client from "../service/client";

import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
