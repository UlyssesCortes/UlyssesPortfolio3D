import { motion } from "framer-motion";
import { styles } from "../styles";
import { arrow, js, react, postgres } from "../assets";
import { slideIn } from "../utils/motion";
import './style/Hero.css'



const Hero = () => {

  return (
    <>
      <section className="heroSection">
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="leftHeader"
        >
          <div>
            <section className="heroName">
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm <span className='text-[#915EFF]'>Ulysses</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I design and develop, user <br className='sm:block hidden' />
                interfaces and web applications
              </p>
            </section>
          </div>
          <div className='buttonContainer'>
            <a href='#projects' className="workBtn">
              <button >My Projects</button>
            </a>
            <a href="https://drive.google.com/file/d/1D5dLU9JYRD7B7n4EIvpNeG5sQOnW_DXk/view?usp=sharing" target="_blank" className="workBtn">
              <button >Resume</button>
            </a>
          </div>
        </motion.div>

        <a href='#about'>
          <div className='arroyBtn'>
            <img
              src={arrow}
              alt='arrow'
              className='arrowImg'
            />
          </div>
        </a>
        <motion.div
          variants={slideIn("right", "spring", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="rightHeader"
        >
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
        </motion.div>

      </section>

    </>
  );
};

export default Hero;
