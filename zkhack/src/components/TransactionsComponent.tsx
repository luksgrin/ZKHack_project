import { useAccount, useEnsName } from "wagmi";
// import styles from "./Transactions.css";

export function TransactionsComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <div className="Transactions_Container">
      <div className="ZyCloone_DepositBox">
        <div className="ZyCloone_Token">
          <p className="Data_Style">Token: ETH</p>
        </div>
        <div className="ZyCloone_Data">
          <p className="Data_Style">amount</p>
          <p className="Data_Style">address</p>
          <p className="Data_Style"></p>
        </div>
      </div>

      <div className="ZyCloone_WithdrawBox">
        <div className="ZyCloone_Data">
          <p className="Data_Style">amount</p>
          <p className="Data_Style">address</p>
          <p className="Data_Style"></p>
        </div>
      </div>
    </div>
  );
}
