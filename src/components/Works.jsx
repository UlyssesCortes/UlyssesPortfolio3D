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
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="projectContainer" data-type="link">
        <Tilt
          options={{
            max: 20,
            scale: 1,
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
  const speed = 2;

  function expanding() {
    const scrollTop = window.pageYOffset;
    const scrollAndSpeed = (scrollTop / speed)
    expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 20), 130) + "%";
  }

  window.addEventListener('scroll', function () {
    this.requestAnimationFrame(expanding);
  }, false)

  const expand = document.getElementById("expand");
  const myProjects = document.querySelector('.myProjects');
  const trailer = document.getElementById("trailer");

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    };

    if (trailer) {
      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
      });
    }
  };

  const getTrailerClass = (type) => {
    switch (type) {
      case "video":
        return "fa-solid fa-play";
      default:
        return "fa-solid fa-arrow-up-right";
    }
  };

  const handleExpandMouseover = (e) => {
    if (trailer) {
      trailer.style.opacity = 1;
      trailer.dataset.type = e.target.dataset.type;
      const icon = document.getElementById("trailer-icon");
      icon.className = getTrailerClass(e.target.dataset.type);
    }
  };

  const handleExpandMouseout = () => {
    if (trailer) {
      trailer.style.opacity = 0;
    }
  };

  if (expand) {
    expand.addEventListener("mouseover", handleExpandMouseover);
    expand.addEventListener("mouseout", handleExpandMouseout);
  }

  if (myProjects) {
    myProjects.addEventListener("mouseover", handleExpandMouseover);
    myProjects.addEventListener("mouseout", handleExpandMouseout);
  }

  if (trailer) {
    window.addEventListener("mousemove", (e) => {
      const interacting = e.target.closest("#expand, .myProjects") !== null;
      animateTrailer(e, interacting);
    });
  }

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
      <div id="trailer">
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");