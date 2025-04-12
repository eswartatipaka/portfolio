import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Eswar</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
          <a href="#experience" className="footer__link">Experience</a>
          </li>

          <li>
          <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/eswar-tatipaka/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin"></i>
          </a>  

          <a href="https://github.com/rahulyenduri" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-github"></i>
          </a> 
          
          <a href="https://www.instagram.com/_eshwar___/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
          </a> 
        </div>

        <span className="footer__copy">
          &#169; EswarTatipaka. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer