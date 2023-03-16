import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components'

const App = () => {

  const blob = document.getElementById("blob");
  window.addEventListener("mousemove", event => {
    const { clientX, clientY } = event;

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  });

  const scrollProgress = document.getElementById('scroll-progress');
  const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

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
