import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

export default () => {
    const slidesData = [{
        name: "E-Palengke",
        project_link: "https://epalengke.shop/",
        project_logo: "images/system.png",
        description: "Laravel + VueJS + Ionic",
        type: 'Academic Thesis',
        class: "project_image",
    },
    {
        name: "Web Based Research Management System",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + VueJS",
        type: 'Freelance',
        class: "project_image",
    },
    {
        name: "Cloud Based Disaster and Risked Geosptial Management System",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + VueJS",
        type: 'Freelance',
        class: "project_image",
    }];

    const modules = [Pagination];

    return (
        <div className="max-w-7xl m-center pb-20">
            <h2 className="text-5xl text-black text-center mb-6">PORTFOLIO</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                centeredSlides={true}
                modules={modules}
                pagination={{ clickable: true }}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    768: { slidesPerView: 3 }
                }}
            >

                {slidesData.map((project, index) => (
                    <SwiperSlide key={project.name} style={{ height: '65vh' }}>
                        <div className="flex flex-col justify-between drop-shadow-2xl bg-white w-80 h-96 p-6  m-center ">
                            <Chip label={project.type} className="mb-2 self-end">
                            </Chip>
                            <div className="flex flex-col items-center text-center">
                                <img src="images/system.png" style={{ width: '40%' }} />
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p>{project.type}</p>
                            </div>
                            <div className="self-center">
                                {project.project_link && (
                                    <a href={project.project_link} target="_blank" className="btn grow mr-2">
                                        <Button variant="contained" style={{ backgroundColor: '#000000' }}>View Site</Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

