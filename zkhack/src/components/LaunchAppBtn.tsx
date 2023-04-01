import Link from 'next/link';

const LaunchAppBtn = () => {
  return (
    <div className='BtnTitle'>
      <Link href="/vault" className="LaunchAppBtn">Launch App</Link>
    </div>
  );
}

export default LaunchAppBtn;
