import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import './style/Projects.css'


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="projectContainer">
        <Tilt
          options={{
            max: 30,
            scale: 1.2,
            speed: 5,
          }}
          className='projImg'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='projImg'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
        </Tilt>

        <div className='descriptionContainer'>
          <h3>{name}</h3>
          <p>{description}</p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className="tags"
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>

    </>
  );
};

const Works = () => {

  const expandDiv = document.getElementById("expand")
  const speed = 5;

  function expanding() {
    const scrollTop = window.pageYOffset;
    const scrollAndSpeed = (scrollTop / speed)
    expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 20), 120) + "%";
  }

  window.addEventListener('scroll', function () {
    this.requestAnimationFrame(expanding);
  }, false)

  return (
    <>
      <div id="container">
        <div id="expand">
          <p className="projTitle">Projects</p>
        </div>
      </div>
      <motion.div variants={textVariant()}>
        <div className='myProjects'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "");