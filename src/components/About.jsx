import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import './style/About.css'


const ServiceCard = ({ index, title, icon }) => (
  <section className='aboutCard'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    // className='shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' py-5 px-12  aboutCardImgae'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </section>
);

const About = () => {

  return (
    <>

      <motion.div variants={textVariant()} className="aboutSec">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a bootcamp graduate skilled in team project-based work. With a passion for collaboration, I excel at working closely with others to achieve shared goals. My practical knowledge includes JavaScript, React, NodeJs, PostgresSQL,  ExpressJs and HTML/CSS. I thrive in fast-paced environments and continually seek opportunities to expand my skill set. Let's connect and explore potential collaborations!
      </motion.p>

      <div className=' aboutCardsContainer'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");