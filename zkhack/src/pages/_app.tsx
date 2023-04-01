import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";

import { chains, client, walletConnectProjectId } from "../wagmi";

// OUR COMPONENTS
import "../css/style.css";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const ethereumClient = new EthereumClient(client, chains);

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <>
      <Header />

      <WagmiConfig client={client}>
        <NextHead>
          <title>ZyKloon</title>
        </NextHead>
        {mounted && <Component {...pageProps} />}
        <Web3Modal
          projectId={walletConnectProjectId}
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>

      <Footer />
    </>
  );
}

export default App;
