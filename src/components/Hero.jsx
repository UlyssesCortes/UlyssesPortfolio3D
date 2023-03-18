import { motion } from "framer-motion";
import { styles } from "../styles";
import { arrow, js, react, postgres } from "../assets";
import './style/Hero.css'



const Hero = () => {

  return (
    <>
      <section className="heroSection">

        <div
          className="leftHeader"
        >
          <div>
            <section className="heroName">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className='text-[#915EFF]'>Ulysses</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D visuals, user <br className='sm:block hidden' />
                interfaces and web applications
              </p>
            </section>
          </div>
          <div className='buttonContainer'>
            <a href='#container'>
              <button className="workBtn">My Projects</button>
            </a>
            <a href="https://drive.google.com/file/d/19skPWiFF3BpRYw__D4unwIlbtHrpBdBB/view?usp=sharing" target="_blank">
              <button className="workBtn" >Resume</button>
            </a>
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
          <div className="js techIcon">
            <img
              src={js}
              alt='js'
              className='arrowImg techIconBig'
            />
          </div>
          <div className="css techIcon">CSS</div>
          <div className="html techIcon">HTML</div>
          <div className="react techIcon">
            <img
              src={react}
              alt='react'
              className='arrowImg techIconBig'
            />
          </div>
          <div className="nodejs techIcon">NodeJs</div>
          <div className="threejs techIcon">ThreeJs</div>
          <div className="express techIcon">Express</div>
          <div className="postgres techIcon">
            <img
              src={postgres}
              alt='postgres'
              className='arrowImg techIconBig'
            />
          </div>
        </section>
      </section>

    </>
  );
};

export default Hero;