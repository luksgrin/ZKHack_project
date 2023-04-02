import { useAccount, useEnsName } from "wagmi";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { SetStateAction } from "react";
import React from "react";
import Link from "next/link";

export function ValidationComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const [destination, setDestination] = React.useState("0");
  const [mode, setMode] = React.useState(0);
  const [epoch, setEpoch] = React.useState("0");
  const [zkconnected, setZKConnect] = React.useState(false);
  const [withdrawDepositMode, setWDMode] = React.useState(false);

  const callValidation = (num: number, e: any) => {
    console.log("lmao", num);
    console.log("lmao e", e);
    console.log("lmao e", e.target.value);
    console.log(destination);
  };

  const getMode = () => {
    if (mode) setMode(0);
    else setMode(1);
  };

  const handleDeposit = () => {
    console.log("handle deposit");
  };
  const handleWithdraw = () => {
    console.log("handle withdraw");
  };

  const WithdrawBox = () => {
    return (
      <div className="ZyCloone_SwitchBox">
        {/* <SwitchComponent parentFunction={(num: any) => callValidation(num)} /> */}
        <FormControl className="Checkboxes_AmountETH">
          <FormLabel id="demo-controlled-radio-buttons-group Checkboxes_AmountETH_Label">
            Amount of ETH
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={0.1}
            defaultValue="0.1"
            onChange={(e: any, num: any) => callValidation(num, e)}
          >
            <FormControlLabel
              value="0.1"
              control={<Radio className="RadioButtonCustom" color="default" />}
              label="0.1 ETH"
            />
            <FormControlLabel
              value="1"
              control={<Radio className="RadioButtonCustom" color="default" />}
              label="1 ETH"
            />
          </RadioGroup>
        </FormControl>
        <button onClick={handleDeposit} className="btn button-charming ">
          Deposit
        </button>
        {/* <Radio onChange={(e: any, num: any) => callValidation(num)}></Radio> */}
      </div>
    );
  };

  const WithdrawDeposit = () => {
    return (
      <div className="ZyCloone_ValidationContainer">
        {/* <button
          className="btn btn-ghost"
          onClick={() => setWDMode(!withdrawDepositMode)}
        >
          {withdrawDepositMode ? (
            <>
              <span className="bold"> Deposit </span> / Withdraw
            </>
          ) : (
            <>
              Deposit / <span className="bold"> Withdraw </span>{" "}
            </>
          )}
        </button> */}

        {withdrawDepositMode ? DepositBox() : WithdrawBox()}
      </div>
    );
  };

  const DepositBox = () => {
    return (
      <div className="ZyCloone_SwitchBox">
        {/* <SwitchComponent parentFunction={(num: any) => callValidation(num)} /> */}
        <FormControl className="Checkboxes_AmountETH">
          <FormLabel id="demo-controlled-radio-buttons-group Checkboxes_AmountETH_Label">
            Amount of ETH
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={0.1}
            defaultValue="0.1"
            onChange={(e: any, num: any) => callValidation(num, e)}
          >
            <FormControlLabel
              value="0.1"
              control={<Radio className="RadioButtonCustom" color="default" />}
              label="0.1 ETH"
            />
            <FormControlLabel
              value="1"
              control={<Radio className="RadioButtonCustom" color="default" />}
              label="1 ETH"
            />
          </RadioGroup>
        </FormControl>

        <div className="Trade_Destination_Container">
          <TextField
            className="Trade_Destination"
            id="outlined-basic"
            label="Destination"
            variant="outlined"
            onChange={(dest: any) =>
              dest != null && dest.target != null
                ? setDestination(dest.target.value)
                : console.log("no valid target")
            }
          />
          <TextField
            className="Trade_Destination Epoch"
            id="outlined-basic"
            label="Epoch"
            variant="outlined"
            onChange={(epoch: any) =>
              epoch != null && epoch.target != null
                ? setEpoch(epoch.target.value)
                : console.log("no valid target")
            }
          />
        </div>
        <button onClick={handleWithdraw} className="btn button-charming ">
          Withdraw
        </button>
        {/* <Radio onChange={(e: any, num: any) => callValidation(num)}></Radio> */}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="ZyCloone_ButtonContainer">
        {/* <button
          className="btn btn-primary btn-change-mode"
          onClick={() => setZKConnect(!zkconnected)}
        >
          Change Withdraw
        </button> */}
        <button
          className={"btn btn-ghost btn-change-mode mode-" + mode}
          onClick={() => {
            setWDMode(!withdrawDepositMode);
            getMode();
          }}
        >
          {withdrawDepositMode ? (
            <>
              Deposit / &nbsp; <span className="bold"> Withdraw </span>{" "}
            </>
          ) : (
            <>
              <span className="bold"> Deposit </span> &nbsp; / Withdraw
            </>
          )}
        </button>
      </div>
      <div className="ZyCloone_ValidationContainer">
        <div className="ZyCloone_Container ">
          {WithdrawDeposit()}
          {/* {zkconnected ? WithdrawDeposit() : SismoBox()} */}
        </div>
      </div>
    </React.Fragment>
  );
}
