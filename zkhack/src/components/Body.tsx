
import Image from 'next/image'

import firstImage from '../public/zykloon.png';
import secondImage from '../public/zykloon.png';

const Body = () => {
  return (
    <div className="page-body">
         
      <div className="Bodycontainer">
        <div className="image-container">
          <Image src={firstImage} alt="First Image" width={400} height={400} />
        </div>
        <div className="text-container">
          <h2>Privacy Layer using Sismo vaults</h2>
          <p>Sismo’s Data Vault stores a user’s encrypted personal data irrespective of its origin.</p>
        </div>
      </div>
      
      <div className="Bodycontainer">
        <div className="text-container2">
          <h2>Improving Transaction Privacy</h2>
          <p>transaction privacy by breaking the on-chain link between source  <br/>and destination addresses.</p>
        </div>
        <div className="image-container2">
          <Image src={secondImage} alt="Second Image" width={400} height={400} />
        </div>
      </div>

    </div>
  )
}

export default Body
