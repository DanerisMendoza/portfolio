import { Component } from "react";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Hero extends Component {
    render() {
        return (
            <div className="h-screen w-screen flex flex-col justify-center items-center" >
                <div className="max-w-7xl flex flex-col items-start  lg:h-1/3 lg:w-3/6 m-4  ">
                    <h2 className="font-extrabold text-6xl text-black mr-12">
                        Daneris Mendoza
                    </h2>
                    <h3 className="text-xl mr-12 text-gray-500 mt-2 mb-2">Fullstack Developer</h3>
                    <h5 className="text-base text-gray-500">
                        I am a graduating computer science major from the University of Caloocan City with a strong foundation in programming and well-rounded skills. My expertise in reverse engineering, along with my proficiency in quickly learning new things, enables me to breakdown and understand complex systems easily.
                        I began working on freelance projects during my fourth year of school and continue to do so presently.                    </h5>
                    <div className="mt-6  flex flex-row items-center gap-2">
                        <a className="enlarge" href="mailto:danerismendoza096@gmail.com" >
                            <Button variant="contained" style={{ backgroundColor: '#000000' }} endIcon={<FontAwesomeIcon icon={faEnvelope} />}>Contact Me </Button>
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
}
export default Hero;