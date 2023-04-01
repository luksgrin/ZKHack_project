import { useAccount, useEnsName } from "wagmi";
import { SwitchComponent } from "./SwitchComponent";
import { SismoButton } from "./SismoButton";

export function ValidationComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <div className="ZyCloone_ValidationContainer">
      <div className="ZyCloone_SwitchBox">
        <SwitchComponent />
      </div>
      <div className="ZyCloone_ButtonContainer">
        <SismoButton />
      </div>
    </div>
  );
}
