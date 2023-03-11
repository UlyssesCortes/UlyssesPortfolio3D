import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Tech } from './components'

const App = () => {

  const blob = document.getElementById("blob");

  window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  }

  return (
    <BrowserRouter>

      <div className="mainContainer">
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

        <Tech />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter >
  )
}

export default App
