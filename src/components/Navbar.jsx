import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from "../constants";
import { menu, close } from '../assets';
import './style/Nav.css'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`links-container ${isOpen && "active"}`}>
        <ul className='links-list'>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar