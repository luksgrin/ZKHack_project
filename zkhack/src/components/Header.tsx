import Link from 'next/link';

// OUR COMPONENTS
import Image from 'next/image';


import HeaderImage from '../public/zykloon.png'

const Header = () => {
  return (
    <div className="Header">
        <div className='container'>
          <Link href="/">
            <Image src={HeaderImage} alt="My Image" className='HeaderImage'/>
          </Link>
        </div>
        <div className='HeaderTitle'>
            <p>Privacy preserving solutions</p>
        </div>
    </div>
  )
}

export default Header