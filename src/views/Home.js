// import logo from './logo.svg';
import '../App.css';
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import Skills from "./Skills";
import store from '../store';
import { Provider } from 'react-redux';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { grey, yellow, blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { setIsDarkGlobal } from '../store/theme';
import { useDispatch, useSelector } from 'react-redux';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const dynamicWavy = (fill) => {
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="${fill}" fill-opacity="1" d="M0,160L34.3,149.3C68.6,139,137,117,206,112C274.3,107,343,117,411,133.3C480,149,549,171,617,149.3C685.7,128,754,64,823,53.3C891.4,43,960,85,1029,112C1097.1,139,1166,149,1234,154.7C1302.9,160,1371,160,1406,160L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svgContent)}`;
  };
  const dynamicWavy2 = (fill) => {
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="background-color: ${fill === '#242526' ? '#18191a' : '#FFFFFF'};">
        <path fill="${fill}" fill-opacity="1"  d="M0,160L34.3,149.3C68.6,139,137,117,206,112C274.3,107,343,117,411,133.3C480,149,549,171,617,149.3C685.7,128,754,64,823,53.3C891.4,43,960,85,1029,112C1097.1,139,1166,149,1234,154.7C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svgContent)}`;
  };

  const [wavy, setWavyColor] = useState(dynamicWavy("#000000"));
  const [wavy2, setWavy2Color] = useState(dynamicWavy2("#000000"));
  const isDark = useSelector((state) => state.themeReducer.isDarkGlobal);
  const [theme, setTheme] = useState(localStorage.getItem("daneris-theme") ? localStorage.getItem("daneris-theme") : 'light');
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    if (localStorage.getItem("daneris-theme") !== null && localStorage.getItem("daneris-theme") === 'dark') {
      setWavyColor(dynamicWavy('#242526'));
      setWavy2Color(dynamicWavy2('#242526'));
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
      dispatch(setIsDarkGlobal(true))
    }
    else {
      document.documentElement.classList.remove("dark")
      dispatch(setIsDarkGlobal(false))
    }
  }, [theme])

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      '& .MuiSwitch-thumb': {
        backgroundColor: yellow[600],
      },
    },

    '& .MuiSwitch-thumb': {
      backgroundColor: yellow[600],
    },
    '& .MuiSwitch-track': {
      backgroundColor: blue[50],
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: blue[50],
    },
  }));

  const handleChange = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem("daneris-theme", 'light');
      setWavyColor(dynamicWavy('#000000'));
      setWavy2Color(dynamicWavy2('#000000'));
    }
    else {
      localStorage.setItem("daneris-theme", 'dark');
      setTheme('dark')
      setWavyColor(dynamicWavy('#242526'));
      setWavy2Color(dynamicWavy2('#242526'));
    }
  }

  return (
    <div className='parent '>
      <img src={wavy} className='wavy' alt="wavy1" />
      <div className='flex flex-col '
        style={{
          // ff = white && 00 = black
          backgroundColor: isDark ? '#18191a' : '#ffffff',
        }}>
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
      <img src={wavy2} className='wavy' alt="wavy2" />
    </div>
  );
}

export default Home;
