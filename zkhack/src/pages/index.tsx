import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

import { Account } from '../components'

import LaunchAppBtn from '../components/LaunchAppBtn'
import Body from '../components/Body'

function Page() {
  const { isConnected } = useAccount()

  return (
    <>
    
      <LaunchAppBtn/>

      <Body/>
    </>

  )
}

export default Page
