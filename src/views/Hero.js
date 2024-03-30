import { Component } from "react";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Hero extends Component {
    render() {
        return (
            <div className="h-screen w-screen flex flex-col justify-center items-center pr-8" >
                <div className="max-w-7xl flex flex-col items-start  lg:h-1/3 lg:w-3/6 m-4 mb-52 md:mb-20 ">
                    <h2 className="font-extrabold text-5xl text-black mr-12">
                        Daneris Mendoza
                    </h2>
                    <h3 className="text-lg mr-12 text-gray-500 mt-2 mb-2">Fullstack Developer</h3>
                    <h5 className="text-sm text-gray-500">
                        I'm a recent computer science graduate,
                        started working on freelance projects
                        on my 4th year of school to the present.
                        My current stacks includes Laravel in Backend then
                        React or Vue in Frontend.
                    </h5>
                    <div className="mt-6">
                        <a href="mailto:danerismendoza096@gmail.com" >
                            <Button variant="contained" style={{ backgroundColor: '#000000' }} endIcon={<FontAwesomeIcon icon={faEnvelope} />}>Contact Me </Button>
                        </a>
                    </div>
                </div>
            </div >
        );
    }
}
export default Hero;