import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>
          Mctools - SHOP SAFELY & SECURELY ONLINE
        </h3>
        <p>
        We combine old fashioned family values of integrity, trust, good value, friendship, and hard work with new high tech products and solutions.
        </p>
        <ul className="socials">
          <li><i className="fa-brands fa-facebook"></i></li>
          <li><i className="fa-brands fa-twitter"></i></li>
          <li><i className="fa-brands fa-square-instagram"></i></li>
          <li><i className="fa-brands fa-google-plus"></i></li>
          <li><i className="fa-brands fa-youtube"></i></li>
        </ul>

        <div className="footer-bottom">
          <p className="design-by">Designed by <span>Payam Beigi</span> Full Stack Web Developer</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;