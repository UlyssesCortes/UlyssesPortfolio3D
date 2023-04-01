import React, { useState } from 'react';
import { navLinks } from "../constants";
import { githubNav, linkedin } from '../assets';
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
      <section className='subNav'>

        <p className='name'>Ulysses Cortes</p>

        <section className='subnavIcons'>

          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className='navIcons'>
            <img className='githubIcon'
              alt='gitHub'
              src={githubNav} />

            <img className='linedinIcon'
              alt='gitHub'
              src={linkedin} />
          </div>


        </section>

      </section>

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