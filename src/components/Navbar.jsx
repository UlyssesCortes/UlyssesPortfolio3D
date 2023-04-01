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

        <p className={`name ${isOpen && "nameVisible"}`}>Ulysses Cortes</p>

        <section className='subnavIcons'>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`${isOpen && "bar1"}`}></div>
            <div className={`${isOpen && "bar2"}`}></div>
            <div className={`${isOpen && "bar3"}`}></div>
          </div>
          <div className='navIcons'>
            <img className='githubIcon'
              alt='gitHub'
              src={githubNav}
              onClick={() => window.open('https://github.com/UlyssesCortes')} />

            <img className='linedinIcon'
              alt='gitHub'
              src={linkedin}
              onClick={() => window.open('https://www.linkedin.com/in/ulyssescp/')} />
          </div>
        </section>

      </section>

      <div className={`links-container ${isOpen && "active"}`}>
        <ul className='links-list'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`} onClick={closeMenu}>{nav.title} </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar