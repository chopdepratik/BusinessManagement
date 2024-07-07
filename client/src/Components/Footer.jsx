import React from 'react';
import '../Css/Style.css';
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About TaskSpark</h2>
          <p>TaskSpark is dedicated to providing the best tools for business management. Our mission is to streamline business processes and boost productivity with our comprehensive management tools.</p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><FaMapMarkerAlt /> 123 Business Street, Suite 456, Business City, 78910</p>
          <p><FaPhone /> (123) 456-7890</p>
          <p><FaEnvelope /> support@taskspark.com</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://twitter.com/TaskSpark" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com/company/TaskSpark" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/TaskSpark" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 TaskSpark. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
