import { useAccount, useEnsName } from "wagmi";
import { SismoButton } from "./SismoButton";
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

export function ValidationComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const [destination, setDestination] = React.useState("0");

  const callValidation = (num: number, e: any) => {
    console.log("lmao", num);
    console.log("lmao e", e);
    console.log("lmao e", e.target.value);
    console.log(destination);
  };
  return (
    <div className="ZyCloone_ValidationContainer">
      <div className="ZyCloone_SwitchBox">
        {/* <SwitchComponent parentFunction={(num: any) => callValidation(num)} /> */}
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={0.1}
            defaultValue="0.1"
            onChange={(e: any, num: any) => callValidation(num, e)}
          >
            <FormControlLabel value="0.1" control={<Radio />} label="0.1 eth" />
            <FormControlLabel value="1" control={<Radio />} label="1 eth" />
          </RadioGroup>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          onChange={(dest: any) =>
            dest != null && dest.target != null
              ? setDestination(dest.target.value)
              : console.log("no valid target")
          }
        />
        {/* <Radio onChange={(e: any, num: any) => callValidation(num)}></Radio> */}
      </div>
      <div className="ZyCloone_ButtonContainer">
        <SismoButton />
      </div>
    </div>
  );
}
