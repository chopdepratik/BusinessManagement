import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Style.css';
import logo from '../Components/Images/Preview.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-button"><Link to="/login">Login</Link></button>
        <button className="signup-button"><Link to="/register">Sign Up</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
