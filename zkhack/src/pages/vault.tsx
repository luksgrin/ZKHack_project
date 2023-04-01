import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";

import { Account } from "../components";

import { TransactionsComponent } from "../components/TransactionsComponent";
import { ValidationComponent } from "../components/ValidationComponent";
import React from "react";

import Link from "next/link";

function Page() {
  const { isConnected } = useAccount();
  const [validated, setValidated] = React.useState(false);

  const checkValidation = () => {
    return validated;
  };

  return (
    <>
      <div className="ZyCloone_Container">
        {/* 
        {checkValidation() ? (
          <TransactionsComponent />
        ) : ( 
        */}

        <ValidationComponent />
       
      </div>

      {/* 
      <button
        onClick={() => {
          console.log("LMAO", validated);
          setValidated(!validated);
          console.log("LMAO", validated);
        }}
      >
        ChangeValidation
      </button> 
      */}

      <div className="WalletConnectButton">
        <Web3Button />
      </div>

      {isConnected}  <Account/>
    </>
  );
}

export default Page;
