import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <Link href="/TermsAndConditionsPage">Terms and Conditions</Link>
          </li>

          <li className="footer__item">
            <Link href="/vault"> Vault</Link>
          </li>
          <li className="footer__item">
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>
      <div className="footer__text">
        &copy; 2023 My Website.
      </div>
    </footer>
  )
}

export default Footer
