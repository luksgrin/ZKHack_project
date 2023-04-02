import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";

import { Account } from "../components";

import { SismoButton } from "../components/SismoButton";

import { ValidationComponent } from "../components/ValidationComponent";
import React from "react";

import Link from "next/link";

function Page() {
  const { isConnected } = useAccount();
  const [validated, setValidated] = React.useState(false);

  const checkValidation = () => {
    return validated;
  };

  const SismoBox = () => {
    return (
      <div className="ZyCloone_ButtonContainerSismo">
        <SismoButton />
      </div>
    );
  };

  return (
    <div className="ZyCloone_Grid">
      <div className="flex-item-left">
        <ValidationComponent />
      </div>

      <div className="flex-item-right">
        <div className="ZyCloone_Container mb-1">
          <Link href="https://app.sismo.io/">
            <div className="SVG_Container">
              <img
                className="ImgSismo"
                src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F137516119-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FDbBfd4ahlvVGlRudj8NR%252Ficon%252FJNVZNmhURJYVGuBQRol5%252FNOTION%2520LOGO_280x280px.jpeg%3Falt%3Dmedia%26token%3D544fe01b-5e19-4e23-aca2-0deb1121db9f"
              ></img>
              {/* <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                line-stroke="2px"
              >
                <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
              </svg> */}
            </div>
            <div className="Sismo_Text">Create Sismo Vault</div>
          </Link>
        </div>
        <div className="ZyCloone_Container">{SismoBox()}</div>
      </div>

      {/* <button
        onClick={() => {
          console.log("LMAO", validated);
          setValidated(!validated);
          console.log("LMAO", validated);
        }}
      >
        ChangeValidation
      </button> */}

      {/* <Web3Button /> */}

      {/* {isConnected && <Account />} */}
    </div>
  );
}

export default Page;
