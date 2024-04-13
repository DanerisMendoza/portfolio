// import logo from './logo.svg';
import './App.css';
import Hero from "./views/Hero";
import Portfolio from "./views/Portfolio";
import Timeline from "./views/Timeline";
import Skills from "./views/Skills";
import Wavy from './Wavy.svg';
import Wavy2 from './Wavy2.svg';
function App() {
  return (
    <>
      <img src={Wavy} className='wavy' />
      <div  className='m-auto'>
        <Hero />
        <Portfolio />
        <Timeline />
        <Skills />
      </div>
      <img src={Wavy2} className='wavy' />
    </>
  );
}

export default App;
