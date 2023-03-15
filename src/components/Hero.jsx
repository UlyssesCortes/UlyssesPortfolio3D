import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { arrow } from "../assets";
import { github } from "../assets";
import './style/Hero.css'

const FOLLOW_DISTANCE = 50;

const Hero = () => {

  // Add event listeners to all techIcon elements
  document.querySelectorAll('.techIcon').forEach(elem => {
    elem.addEventListener('mouseenter', onMouseEnter);
    elem.addEventListener('mousemove', onMouseMove);
    elem.addEventListener('mouseleave', onMouseLeave);

    const savedPosition = localStorage.getItem(`position-${elem.className}`);
    if (savedPosition) {
      elem.style.transform = `translate(${savedPosition})`;
    }
  });

  // Handler for when the mouse enters the element
  function onMouseEnter(event) {
    // Store the center point of the element
    const rect = event.target.getBoundingClientRect();
    event.target.center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  // Handler for when the mouse moves over the element
  function onMouseMove(event) {
    // Calculate the distance between the mouse and the center point of the element
    const dx = event.clientX - event.target.center.x;
    const dy = event.clientY - event.target.center.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the distance is less than the threshold, move the element
    if (distance < FOLLOW_DISTANCE) {
      const angle = Math.atan2(dy, dx);
      const translateX = distance * Math.cos(angle);
      const translateY = distance * Math.sin(angle);
      event.target.style.transform = `translate(${translateX}px, ${translateY}px)`;

      // Save the position to localStorage
      const position = `${translateX}px, ${translateY}px`;
      localStorage.setItem(`position-${event.target.className}`, position);
    }
    else {
      event.target.style.transform = '';
    }
  }
  function onMouseLeave(event) {
    event.target.style.transform = '';
  }
  return (
    <>
      <section className="heroSection">

        <div
          className="leftHeader"
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Ulysses</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>

          </div>
          <div className='buttonContainer'>
            <button className="workBtn">My Projects</button>
            <button className="workBtn">Resume</button>
          </div>
        </div>
        <a href='#container'>
          <div className='arroyBtn'>
            <img
              src={arrow}
              alt='arrow'
              className='arrowImg'
            />
          </div>
        </a>
        <section className="rightHeader">
          <div className="js techIcon">JS</div>
          <div className="css techIcon">CSS</div>
          <div className="html techIcon">HTML</div>
          <div className="react techIcon">React</div>
          <div className="nodejs techIcon">NodeJs</div>
          <div className="threejs techIcon">ThreeJs</div>
          <div className="express techIcon">Express</div>
          <div className="postgres techIcon">Postgres</div>
        </section>
      </section>

    </>
  );
};

export default Hero;