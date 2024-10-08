import React from 'react';
import './WhatAreSolarStorms.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">Mi Aplicación</a>
        <div className="navbar-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/info" className="navbar-link">Info</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Acerca de</a>
          </li>
          <li className="navbar-item dropdown">
            <a href="#dropdown" className="navbar-link">Más</a>
            <ul className="dropdown-menu">
              <li><a href="#action1" className="dropdown-item">Acción 1</a></li>
              <li><a href="#action2" className="dropdown-item">Acción 2</a></li>
              <li><a href="#action3" className="dropdown-item">Acción 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
