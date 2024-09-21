import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200); // Adjust the value based on when you want the fixed navbar to appear
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className='icon'>
          Travel.Io
        </div>
        <ul>
          <li><Link to="/" className="Home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contect" className="contact">Contact</Link></li>
        </ul>
        <div className="right">
          <h1><img src="assets/earth.svg" alt="img"/> | INR</h1> 
          <Link to="/signup" className="signin">Join Us</Link>
        </div>
      </nav>
      {isScrolled && (
      <div className='fixed-nav'>
        <div className="fixed-navbar">
          <div classname="icon-1">
            Travel.Io
          </div>
          <div className="searchbar-1">
            <input id='search' type="text" placeholder="See what ever you like...."/>
            <button id='searchbtn'>Search</button>
        </div>
        <div classname="items-1">
        <ul>
          <li><Link to="/" className="Home-1">Home</Link></li> 
          <li><Link to="/services"className='service-1'>Services</Link></li>
          <li><Link to="/contact" className="contact-1">Contact</Link></li>
        </ul>
        </div>
       
    </div>
     <nav className="item-2">
      <ul>
        <li>
          <img src="assets/home.svg" alt="img" /> <a href="#home">Search All</a>
        </li>
        <li>
          <img src="assets/hotel.svg" alt="img" />
          <a href="#about">Hotels</a>
        </li>
        <li>
          <img src="assets/food.svg" alt="img" />
          <a href="#services">To Do</a>
        </li>
        <li>
          <img src="assets/boat.svg" alt="img" />
          <a href="#contact">Vacation</a>
        </li>
        <li>
          <img src="assets/todo.svg" alt="img" />
          <a href="#contact">Plan The Day</a>
        </li>
      </ul>
    </nav>
        </div>
        
      )}
    </>
  );
}

export default Navbar;
