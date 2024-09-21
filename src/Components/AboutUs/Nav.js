
import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-1">
      <div className="navbar-header-1">
        <div className="navbar-brand">Newsroom</div>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      {isOpen && (
        <ul className="navbar-menu-1">
          <li>Logo & Guidelines</li>
          <li>Equity, Diversity + Inclusion</li>
          <li>Social Impact</li>
          <li>Trust & Safety</li>
          <li>Case Studies</li>
          <li>Business Marketing Tools</li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
