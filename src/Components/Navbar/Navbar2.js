import React from "react";
import "./Navbar2.css";
import { Link} from 'react-router-dom';


function Navbar2() {
  return (
    <nav className="navbar2">
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
          <a><Link to="/convo" className="contact">Helping Hand</Link></a>
          
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
  );
}

export default Navbar2;
