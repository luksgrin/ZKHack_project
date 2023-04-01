import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";

import { Account } from "../components";

import { TransactionsComponent } from "../components/TransactionsComponent";
import { ValidationComponent } from "../components/ValidationComponent";

function Page() {
  const { isConnected } = useAccount();
  var validated = true;

  const checkValidation = () => {
    return validated;
  };

  return (
    <>
      <div className="ZyCloone_Container">
        {checkValidation() ? (
          <TransactionsComponent />
        ) : (
          <ValidationComponent />
        )}
      </div>

      <button
        onClick={() => {
          validated = !validated;
        }}
      >
        ChangeValidation
      </button>

      <Web3Button />

      {isConnected && <Account />}
    </>
  );
}

export default Page;
