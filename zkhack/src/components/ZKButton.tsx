import {
  ZkConnectButton,
  ZkConnectClientConfig,
  ZkConnectResponse,
  AuthType,
} from "@sismo-core/zk-connect-react";
import axios from "axios";
import { useState } from "react";

export const zkConnectConfig: ZkConnectClientConfig = {
  appId: "0x112a692a2005259c25f6094161007967",
  devMode: {
    // enable or disable dev mode here to create development groups and use the development vault.
    enabled: process.env.NEXT_PUBLIC_ENV_NAME === "LOCAL" ? true : false,
    devGroups: [
      {
        groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a",
        // Add your dev addresses here to become eligible in the DEV env
        data: [
          "0x2bf7b04f143602692bbdc3ecbea68c2c65278eee",
          "0x3f559454185098cb3a496f864a4bdd82b34c7fd1",
        ],
      },
    ],
  },
};

enum SubscriptionStatus {
  AlreadySubscribed = "already-subscribed",
  NotSubscribed = "not-subscribed",
}

export default function Home() {
  const [verifying, setVerifying] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] =
    useState<SubscriptionStatus | null>(null);
  const [zkConnectResponse, setZkConnectResponse] =
    useState<ZkConnectResponse | null>(null);

  async function onSubmitEmail(email: string) {
    return await axios.post(`/api/subscribe`, {
      email,
      zkConnectResponse,
    });
  }

  return (
    <ZkConnectButton
      config={zkConnectConfig}
      claimRequest={{
        //The merge contributor groupId
        groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a",
      }}
      authRequest={{ authType: AuthType.ANON }}
      onResponse={(response) => {
        setVerifying(true);
        setZkConnectResponse(response);
        axios
          .post(`/api/subscribe`, {
            zkConnectResponse: response,
          })
          .then((res) => {
            setVerifying(false);
            setSubscriptionStatus(res.data.status);
          })
          .catch((err) => {
            setVerifying(false);
          });
      }}
      verifying={verifying}
      overrideStyle={{
        marginTop: 30,
      }}
    />
    // <Main>
    //   {!subscriptionStatus && (
    //     <>

    //       <Title>The Merge Contributors mailing list</Title>
    //       <Subtitle style={{ marginBottom: 30 }}>
    //         Contributors to The Merge can register their email addresses in a
    //         privacy-preserving manner—gaining access to exclusive tickets for
    //         web3 events.
    //       </Subtitle>
    //       <Search groupId="0x42c768bb8ae79e4c5c05d3b51a4ec74a" />

    //     </>
    //   )}
    //   {subscriptionStatus && (
    //     <EmailForm
    //       onSubmitEmail={onSubmitEmail}
    //       subscriptionStatus={subscriptionStatus}
    //     />
    //   )}
    // </Main>
  );
}