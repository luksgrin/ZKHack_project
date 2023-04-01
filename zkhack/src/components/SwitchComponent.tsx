import { useAccount, useEnsName } from "wagmi";

export function SwitchComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return <div>Switch to be done</div>;
}
