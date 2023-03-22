import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components'

const App = () => {

  function handleMouseMove(event) {
    const { clientX, clientY } = event;

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="bg-hero-pattern br-cover bg-no-repeat bg-center">
        <div className="container">
          <div id="blob"></div>
          <div id="blur"></div>
        </div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Works />
      <Experience />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter >
  )
}

export default App
