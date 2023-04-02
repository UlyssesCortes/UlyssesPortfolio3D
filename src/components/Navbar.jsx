import React, { useState } from 'react';
import { navLinks } from "../constants";
import { githubNav, linkedin, githubNavGrey, linkedinGrey } from '../assets';
import './style/Nav.css'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [gitIsHovered, setGitIsHovered] = useState(false);
  const [linkedinIsHovered, setLinkedinIsHovered] = useState(false);

  const gitHubNavIcon = gitIsHovered ? githubNavGrey : githubNav;
  const linkedinNavIcon = linkedinIsHovered ? linkedinGrey : linkedin;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <body>
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
              src={gitHubNavIcon}
              onClick={() => window.open('https://github.com/UlyssesCortes')}
              onMouseEnter={() => setGitIsHovered(true)}
              onMouseLeave={() => setGitIsHovered(false)}
            />

            <img className='linedinIcon'
              alt='gitHub'
              src={linkedinNavIcon}
              onClick={() => window.open('https://www.linkedin.com/in/ulyssescp/')}
              onMouseEnter={() => setLinkedinIsHovered(true)}
              onMouseLeave={() => setLinkedinIsHovered(false)} />
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
    </body>
  )
}

export default Navbar