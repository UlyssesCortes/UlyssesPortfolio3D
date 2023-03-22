import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components'

const App = () => {

  // const blob = document.getElementById("blob")

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

  const scrollProgress = document.getElementById('scroll-progress');


  const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(height);

  window.addEventListener('scroll', () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  });

  return (
    <BrowserRouter>
      <div id="scroll-progress"></div>
      <div className="bg-hero-pattern br-cover bg-no-repeat bg-center">
        <div className="container">
          <div id="blob"></div>
          <div id="blur"></div>
        </div>
        <Navbar />
        <Hero />
      </div>
      <Works />
      <About />
      <Experience />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter >
  )
}

export default App
