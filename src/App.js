// import logo from './logo.svg';
import './App.css';
import Hero from "./views/Hero";
import Portfolio from "./views/Portfolio";
import Timeline from "./views/Timeline";
import Skills from "./views/Skills";
import Wavy from './Wavy.svg';
import Wavy2 from './Wavy2.svg';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <img src={Wavy} className='wavy' />
        <div className='m-auto'>
          <Hero />
          <Portfolio />
          <Timeline />
          <Skills />
        </div>
        <img src={Wavy2} className='wavy' />
      </Provider>
    </>
  );
}

export default App;
