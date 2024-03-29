import { styles } from "../styles";
import { arrow, js, react, postgres } from "../assets";
import './style/Hero.css'

const Hero = () => {

  return (
    <>
      <main className="heroSection">
        <article
          initial="hidden"
          animate="show"
          className="leftHeader"
        >
          <section className="heroName">
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className='text-[#915EFF]'>Ulysses</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 sloganHero`}>
              I design and develop, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </section>
          <div className='buttonContainer'>
            <a href='#projects' className="workBtn">
              <button >My Projects</button>
            </a>
            <a href="https://drive.google.com/file/d/1FoWrLKNtEqDvZl8eRGJDe43rcE8-UOT2/view?usp=sharing" target="_blank" className="workBtn">
              <button >Resume</button>
            </a>
          </div>
        </article>

        <div
          initial="hidden"
          animate="show"
          className="rightHeader"
        >
          <div className="js techIcon">
            <img
              src={js}
              alt='js'
              className='arrowImg techIconBig'
              loading="lazy"
            />
          </div>
          <div className="css techIcon">CSS</div>
          <div className="html techIcon">HTML</div>
          <div className="react techIcon">
            <img
              src={react}
              alt='react'
              className='arrowImg techIconBig'
              loading="lazy"
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
              loading="lazy"
            />
          </div>
        </div>

      </main>
      <a href='#about'>
        <div className='arroyBtn'>
          <img
            src={arrow}
            alt='arrow'
            className='arrowImg'
            loading="lazy"
          />
        </div>
      </a>
    </>
  );
};

export default Hero;
