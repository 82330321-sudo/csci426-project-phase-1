import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/" className="logo"> Aya's Bookstore</Link>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/browse"> Browse Books </Link>
        <Link to="/features"> Features </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
};

export default NavBar;