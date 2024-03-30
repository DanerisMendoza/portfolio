// import logo from './logo.svg';
import './App.css';
import Hero from "./views/Hero";
import Portfolio from "./views/Portfolio";
import Timeline from "./views/Timeline";
import Skills from "./views/Skills";
function App() {
  return (
    <div className="p-5">
      <Hero />
      <Portfolio />
      <Timeline />
      <Skills />
    </div>
  );
}

export default App;
