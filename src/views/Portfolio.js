import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';

export default () => {
    const slidesData = [{
        name: "E-Palengke",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + VueJS + Vuetify + Ionic",
        platform: 'Web & Mobile',
        type: 'Academic Thesis',
        source_code: [],
    },
    {
        name: "Research Monitoring System",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + VueJS + Vuetify",
        platform: 'Web',
        type: 'Freelance',
        source_code: [],
    },
    {
        name: "Cloud Based Disaster and Risked Geosptial Management System",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + Vue3 + Vuetify",
        platform: 'Web',
        type: 'Freelance',
        source_code: [],
    },
    {
        name: "Web Based Ordering Management System",
        project_link: "",
        project_logo: "images/system.png",
        description: "jQuery + PHP + Bootstrap",
        platform: 'Web & Mobile',
        type: 'Academic Case Study',
        source_code: '',
    },
    {
        name: "Portfolio",
        project_link: "https://danerismendoza.github.io/DanerisMendoza/",
        project_logo: "images/system.png",
        description: "ReactJS + Tailwind + MUI",
        platform: 'Web',
        type: 'Personal',
        source_code: 'https://github.com/DanerisMendoza/DanerisMendoza',
    },
    {
        name: "Cash Management Tracker",
        project_link: "",
        project_logo: "images/system.png",
        description: "Java Mobile",
        platform: 'Mobile',
        type: 'Academic Case Study',
        source_code: '',
    },
    {
        name: "Vaccination System",
        project_link: "",
        project_logo: "images/system.png",
        description: "C# + Mysql",
        platform: 'Window',
        type: 'Academic Case Study',
        source_code: '',
    },
    ];

    const modules = [Pagination];

    return (
        <div className="h-screen w-screen max-w-7xl m-center pr-8">
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
                initialSlide={1}
            >

                {slidesData.map((project, index) => (
                    <SwiperSlide key={project.name} style={{ height: '65vh', display: 'flex', alignItems: 'center' }}>
                        <div className="flex flex-col justify-between drop-shadow-2xl bg-white w-80 h-96 p-6  m-center ">
                            <Chip label={project.type} className="mb-2 self-end">
                            </Chip>
                            <div className="flex flex-col items-center text-center">
                                <img src="/DanerisMendoza/images/system.png" alt='app' style={{ width: '40%' }} />
                                <p className=' text-l font-semibold'>{project.name}</p>
                                <p className=' text-s text-gray-400'>{project.description}</p>
                            </div>
                            <div className="self-center flex flex-row gap-3 items-center">
                                {project.project_link && (
                                    <a href={project.project_link} target="_blank" className="btn grow enlarge">
                                        <FontAwesomeIcon icon={faLink} size="2xl" />
                                    </a>
                                )}
                                {!Array.isArray(project.source_code) && project.source_code && (
                                    <a href={project.source_code} target="_blank" className="btn grow enlarge">
                                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                                    </a>
                                )}
                                <FontAwesomeIcon className='enlarge pl-2 pr-2' style={{ color: '#000000', border: '1px solid #000000', borderRadius: '12%' }} icon={faEllipsis} size="2xl" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

