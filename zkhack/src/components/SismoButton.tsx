import { useAccount, useEnsName } from "wagmi";

export function SismoButton() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <div>
      <button>sismo button TBD</button>
    </div>
  );
}
