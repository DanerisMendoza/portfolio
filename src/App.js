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
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink, yellow, grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    console.log(theme)
  }, [theme])


  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      '& .MuiSwitch-thumb': {
        backgroundColor: grey[900],
      },
    },

    '& .MuiSwitch-thumb': {
      backgroundColor: yellow[600],
    },
    '& .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  return (
    <>
      <Provider store={store}>

        <img src={Wavy} className='wavy' />
        <div className='flex flex-col dark:bg-black'>
          <PinkSwitch
            {...label}
            checked={theme === 'dark'}
            className='self-end'
            onChange={handleChange}
          />
          <div className='m-auto'>
            <Hero />
            <Portfolio />
            <Timeline />
            <Skills />
          </div>
        </div>
        <img src={Wavy2} className='wavy' />
      </Provider>
    </>
  );
}

export default App;
