import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
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

  return (
    <>
      <div className="projectContainer" data-type="link">
        <section className="projImageContainer">
          <div className=' projImgContainer'
            onClick={() => window.open(project_url, "_blank")}
          >

            <img
              src={image}
              alt='project_image'
              className='projImg'
              loading="lazy"
            />
          </div>

          <img
            src={github}
            alt='githubCode'
            className='gitLinkSource'
            onClick={() => window.open(source_code_link, "_blank")}
            loading="lazy"
          />
        </section>

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
      </div>
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
          <p id="projTitle" className={styles.sectionHeadText}>Projects</p>

          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "");