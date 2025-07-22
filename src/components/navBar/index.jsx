import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
