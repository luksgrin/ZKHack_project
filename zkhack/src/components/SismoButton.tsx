import { ZkConnectButton } from "@sismo-core/zk-connect-react";
import { useAccount, useEnsName } from "wagmi";
import Home from "./ZKButton";

export function SismoButton() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return <Home></Home>;
}
