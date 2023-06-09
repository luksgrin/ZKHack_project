import {
  Claim,
  RequestContentLib,
  ZkConnect,
  ZkConnectClient,
  ZkConnectClientConfig,
  ZkConnectRequestContent,
} from '../src'

describe('ZkConnect', () => {
  let appId: string
  let groupId: string
  let claimRequest: Claim
  let config: ZkConnectClientConfig

  let zkConnect: ZkConnectClient

  beforeAll(() => {
    appId = '0xf68985adfc209fafebfb1a956913e7fa'
    groupId = '0x682544d549b8a461d7fe3e589846bb7b'

    config = {
      appId,
    }
    claimRequest = {
      groupId: '0x1',
    }

    zkConnect = ZkConnect(config)
  })

  it('should generate a request link', async () => {
    expect(
      zkConnect.getRequestLink({
        claimRequest,
      })
    ).toEqual(
      `https://vault-beta.sismo.io/connect?version=zk-connect-v2&appId=0xf68985adfc209fafebfb1a956913e7fa&requestContent={\"dataRequests\":[{\"claimRequest\":{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}}],\"operators\":[]}`
    )
  })

  it('should generate a request link with a namespace', async () => {
    expect(
      zkConnect.getRequestLink({
        claimRequest,
        namespace: 'my-namespace',
      })
    ).toEqual(
      `https://vault-beta.sismo.io/connect?version=zk-connect-v2&appId=0xf68985adfc209fafebfb1a956913e7fa&requestContent={\"dataRequests\":[{\"claimRequest\":{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}}],\"operators\":[]}&namespace=my-namespace`
    )
  })

  // it("should generate a request link with 3 dataRequests", async () => {
  //   const requestContentWithOperators = RequestContentLib.build({
  //     dataRequests: [{
  //       claimRequest: {
  //         groupId: "0x1"
  //       }
  //     },
  //     {
  //       claimRequest: {
  //         groupId: "0x2"
  //       }
  //     },
  //     {
  //       claimRequest: {
  //         groupId: "0x3"
  //       }
  //     }]
  //   });

  //   expect(
  //     zkConnect.getRequestLink({
  //       requestContent: requestContentWithOperators
  //     })
  //   ).toEqual(`https://vault-beta.sismo.io/connect?version=zk-connect-v2&appId=0xf68985adfc209fafebfb1a956913e7fa&requestContent={\"dataRequests\":[{\"claimRequest\":{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}},{\"claimRequest\":{\"groupId\":\"0x2\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}},{\"claimRequest\":{\"groupId\":\"0x3\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}}],\"operators\":[\"AND\",\"AND\"]}`)
  // });

  // it("should generate a request link with 3 dataRequests with OR operator", async () => {
  //   const requestContentWithOperators = RequestContentLib.build({
  //     dataRequests: [{
  //       claimRequest: {
  //         groupId: "0x1"
  //       }
  //     },
  //     {
  //       claimRequest: {
  //         groupId: "0x2"
  //       }
  //     },
  //     {
  //       claimRequest: {
  //         groupId: "0x3"
  //       }
  //     }],
  //     operator: "OR"
  //   });

  //   expect(
  //     zkConnect.getRequestLink({
  //       requestContent: requestContentWithOperators
  //     })
  //   ).toEqual(`https://vault-beta.sismo.io/connect?version=zk-connect-v2&appId=0xf68985adfc209fafebfb1a956913e7fa&requestContent={\"dataRequests\":[{\"claimRequest\":{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}},{\"claimRequest\":{\"groupId\":\"0x2\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}},{\"claimRequest\":{\"groupId\":\"0x3\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}}],\"operators\":[\"OR\",\"OR\"]}`)
  // });

  it('should generate a request link with a callbackPath', async () => {
    expect(
      zkConnect.getRequestLink({
        claimRequest,
        callbackPath: '/my-callback-path',
      })
    ).toEqual(
      `https://vault-beta.sismo.io/connect?version=zk-connect-v2&appId=0xf68985adfc209fafebfb1a956913e7fa&requestContent={\"dataRequests\":[{\"claimRequest\":{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}}],\"operators\":[]}&callbackPath=/my-callback-path`
    )
  })

  it('should generate a request link with dev addresses', async () => {
    zkConnect = ZkConnect({
      ...config,
      devMode: {
        enabled: true,
        devGroups: [
          {
            groupId: '0x1',
            groupTimestamp: 'latest',
            data: ['0x123', '0x345'],
          },
        ],
      },
    })
    expect(
      zkConnect.getRequestLink({
        claimRequest,
      })
    ).toEqual(
      `https://dev.vault-beta.sismo.io/connect?version=zk-connect-v2&appId=0xf68985adfc209fafebfb1a956913e7fa&requestContent={\"dataRequests\":[{\"claimRequest\":{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}}],\"operators\":[]}&devConfig={\"enabled\":true,\"devGroups\":[{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"data\":[\"0x123\",\"0x345\"]}]}`
    )
  })

  it('should generate a request link with dev addresses with value', async () => {
    zkConnect = ZkConnect({
      ...config,
      devMode: {
        enabled: true,
        devGroups: [
          {
            groupId: '0x1',
            groupTimestamp: 'latest',
            data: {
              '0x123': 3,
              '0x345': 2,
            },
          },
        ],
      },
    })
    expect(
      zkConnect.getRequestLink({
        claimRequest,
      })
    ).toEqual(
      `https://dev.vault-beta.sismo.io/connect?version=zk-connect-v2&appId=0xf68985adfc209fafebfb1a956913e7fa&requestContent={\"dataRequests\":[{\"claimRequest\":{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"value\":1,\"claimType\":1,\"extraData\":\"\"}}],\"operators\":[]}&devConfig={\"enabled\":true,\"devGroups\":[{\"groupId\":\"0x1\",\"groupTimestamp\":\"latest\",\"data\":{\"0x123\":3,\"0x345\":2}}]}`
    )
  })
})
