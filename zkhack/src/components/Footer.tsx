import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#">Link 1</a>
          </li>
          <li className="footer__item">
            <a href="#">Link 2</a>
          </li>
          <li className="footer__item">
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>
      <div className="footer__text">
        &copy; 2023 My Website. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer