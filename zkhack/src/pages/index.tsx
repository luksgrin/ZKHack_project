import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

import { Account } from '../components'


function Page() {
  const { isConnected } = useAccount()

  return (
    <div className='ButtonContainer'>    
      <div className='ConnectWallet'>
        <Web3Button />
        {isConnected && <Account />}
      </div>
    </div>

  )
}

export default Page
