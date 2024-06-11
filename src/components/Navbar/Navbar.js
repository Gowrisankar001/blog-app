// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav-header'>
      <div className="nav-content">
          <h1 className='blog-heading'>BlogApp</h1>
      </div>
      <div className="signin-signup-button-container">
        
          <button className='login-signup-buttons'><Link className='login-signup-link' to="/login">Login</Link></button>

          <button className='login-signup-buttons'><Link className='login-signup-link' to="/signup">Signup</Link></button>
        
      </div>
      
    </nav>
  );
};

export default Navbar;
