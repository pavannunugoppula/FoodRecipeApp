// NavbarComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarComponent.css'; // optional for styling

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/details">WhyChooseUs?</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
