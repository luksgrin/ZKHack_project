import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";

import { Account } from "../components";
import LaunchAppBtn from "../components/LaunchAppBtn";
import Body from "../components/Body";

function Page() {
  const { isConnected } = useAccount();

  return (
    // <div className='ButtonContainer'>
    //   <div className='ConnectWallet'>
    //     <Web3Button />
    //     {isConnected && <Account />}
    //   </div>
    // </div>
    <>
      <LaunchAppBtn />

      <Body />
    </>
  );
}

export default Page;
