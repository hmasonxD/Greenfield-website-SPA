import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import "../index.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container className="footer-content">
        <div className="footer-section">
          <Link to="/">
            <img
              src={logo}
              alt="Greenfield Technologies Inc."
              className="footer-logo"
            />
          </Link>
          <div className="footer-address">
            <span>OUR LOCATION</span>
            <span className="footer-address-line">
              Head Quarter - 64-120 Magrath RD, Edmonton AB, T6R0C6
            </span>
            <span className="footer-address-line">
              Branch Address - 1418 Osprey Dr #2 Hamilton, ON L9G 4V5
            </span>
          </div>
        </div>
        <div className="footer-section">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
