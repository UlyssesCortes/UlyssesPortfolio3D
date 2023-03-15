import { motion } from "framer-motion";
import { styles } from "../styles";
import { arrow } from "../assets";
import './style/Hero.css'

const Hero = () => {

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