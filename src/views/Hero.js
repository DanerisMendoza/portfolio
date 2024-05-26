import { Component, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { setIsDarkGlobal } from '../store/theme';

function Hero() {

    const isDark = useSelector((state) => state.themeReducer.isDarkGlobal);

    return (
        <div className="h-screen w-screen flex flex-col sm:justify-center items-center p-2">
            <div className="flex flex-col items-start  lg:h-1/3 lg:w-3/6 ml-4 ">
                <h1 className="font-extrabold text-6xl text-black dark:text-white mr-12 mt-9 md:mt-6"
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="500">
                    Daneris Mendoza
                </h1>
                <h2 className="text-xl mr-12 text-gray-500 mt-2 mb-2 dark:text-white"
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-duration="500"
                >Freelance Full Stack Developer</h2>
                <h5 className=" text-base text-gray-500 text-sm lg:text-md text-justify pr-1 dark:text-white"
                    data-aos="fade-right"
                    data-aos-delay="700"
                    data-aos-duration="500">
                    I am a computer science major with a strong foundation in programming and well-rounded skills.
                    I am also a hardworking freelance full-stack developer who is quick at creating effective solutions. I began working on freelance projects during my fourth year of school and continue to do so presently.
                    I excel in both frontend and backend development, both theoretically and practically. My expertise in reverse engineering, along with my proficiency in quickly learning new things, enables me to break down and understand complex projects easily.
                </h5>
                <div className="mt-4 md:mt-6  flex flex-row items-center gap-2 dark:text-white "
                    data-aos="fade-right"
                    data-aos-delay="800"
                    data-aos-duration="500">
                    <a className="enlarge" href="mailto:danerismendoza096@gmail.com" >
                        <Button variant="contained"
                            style={{
                                // ff = white && 00 = black
                                backgroundColor: isDark ? '#ffffff' : '#000000',
                                color: isDark ? '#000000' : '#ffffff', // Example: Changing text color too
                            }}
                            endIcon={<FontAwesomeIcon icon={faEnvelope} />}>Contact Me </Button>
                    </a>
                    <a className="enlarge" href="https://github.com/DanerisMendoza" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                    </a>
                    <a className="enlarge" href="https://www.linkedin.com/in/danerismendoza/" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                </div>
            </div>
        </div >
    );

}
export default Hero;