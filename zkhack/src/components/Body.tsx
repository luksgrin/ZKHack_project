
import Image from 'next/image'

import firstImage from '../public/zykloon.png';
import secondImage from '../public/zykloon.png';

const Body = () => {
  return (
    <div className="page-body">
      <div className="container">
        <div className="image-container">
          <Image src={firstImage} alt="First Image" width={400} height={400} />
        </div>
        <div className="text-container">
          <h2>First Text</h2>
          <p>Lorem ipssum</p>
        </div>
      </div>
      <div className="container">
        <div className="text-container">
          <h2>Second Text</h2>
          <p>Lorem ipsum</p>
        </div>
        <div className="image-container">
          <Image src={secondImage} alt="Second Image" width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Body
