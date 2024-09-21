
import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h6 className="footer-heading">Management Team</h6>
      <div className="footer-icons">
        <a href="mailto:asharma112003@gmail.com" className="footer-icon">
          <FaEnvelope /> Email Us
        </a>
        <a href="https://www.linkedin.com/company/example" className="footer-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="tel:8178925682" className="footer-icon">
          <FaPhone /> Contact
        </a>
        <a href="https://twitter.com/example" className="footer-icon" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> Twitter
        </a>
      </div>
      <p className="footer-text">Get in touch with our management team to learn more about our travel planning services.</p>
    </div>
  );
};

export default Footer;
