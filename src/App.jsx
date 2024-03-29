import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Social, StarsCanvas } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <StarsCanvas />
          <Navbar />
          
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
        <StarsCanvas />
          <Contact />
          <Social />
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
