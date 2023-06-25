import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import './style/Projects.css'

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  project_url,
}) => {
  const [showText, setShowText] = useState(false)

  return (
    <>
      <section className="projectContainer" data-type="link">
        <section className="projImageContainer">
          <div className=' projImgContainer'
          >
            <img
              src={image}
              alt='project_image'
              className='projImg'
              loading="lazy"
            />
          </div>
          <section className="projLinks">
            <button onClick={() => window.open(project_url, "_blank")}>Live Link</button>
            <button onClick={() => window.open(source_code_link, "_blank")}>GitHub</button>
          </section>

        </section>

        <section className='descriptionContainer'>
          <h3>{name}</h3>
          <p className={`projectDescription ${showText && "expandText"}`}
            onClick={() => { setShowText(!showText) }}>{description}</p>

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
        </section>
      </section>
    </>
  );
};

const Works = () => {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <motion.div
        id="projects"
        style={{
          scale
        }}
      >

        <div className='myProjects'>
          <motion.h1 variants={textVariant()} id="projTitle" className={styles.sectionHeadText}>Projects</motion.h1>

          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "");