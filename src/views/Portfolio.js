import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';


export default () => {
    const slidesData = [{
        name: "E-Palengke",
        project_link: "https://epalengke.shop/",
        project_logo: "images/system.png",
        description: "Laravel + VueJS + Vuetify + Ionic",
        long_description: "Nearby e-commerce geolocation and radius based. User can have multiple user role through applying to gain more access, it consist of 4 user role Admin, Seller, Customer and Delivery. End-user can buy, sell and deliver within their registered radius vicinity.",
        technology: ['Laravel', 'Websocket', 'Typescript', 'PusherJs', 'VueJs', 'Vuetify', 'Vuex', 'Axios', 'Ionic/Vue', 'Capacitor', 'Leaflet', 'Firebase(Push Notification)', 'Swal2'],
        platform: 'Web & Mobile',
        type: 'Academic Thesis',
        source_code: [],
        images_path: '/portfolio/images/e-palengke',
        images_num_web: [0, 1, 2, 3, 4],
        images_num_mobile: [0, 1, 2, 3, 4, 5],
        demo_accounts: [
            { role: 'Admin', username: 'admin', password: 'admin' },
            { role: 'Customer', username: 'patrick', password: '123' },
            { role: 'Seller', username: 'thomas', password: '123' },
            { role: 'Delivery', username: 'antonio', password: '123' },
        ],
        functionality: ['Dynamic End-User Application based on administrator preference', 'Dynamic User Access Database Structure', 'Realtime Functionality using PusherJS/Websockets', 'Product type Filtering', 'Store type Filtering', 'Passport Authentication']
    },
    {
        name: "Research Repository Management System",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + VueJS + Vuetify",
        long_description: "Research Management hierarchy based can dynamically create college and department. Multiple user role Admin, Dean, Chairperson and Professor, Dynamic Analytics by Colleges and Department Year and Month, Research upload through pdf.",
        technology: ['Laravel', 'VueJs', 'Vuetify', 'Vuex', 'Axios'],
        platform: 'Web',
        type: 'Freelance',
        source_code: [],
        images_path: '/portfolio/images/rms',
        images_num_web: [],
    },
    {
        name: "Cloud Based Disaster and Risked Geosptial Management System",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + Vue3 + Vuetify",
        long_description: "Realtime Geospatial Managment System user send a report after admin approval it will realtime reflect in map. Primary feature is Polygon and Radius Computation that will reflect in map.",
        technology: ['Laravel', 'Vue3', 'Vuetify', 'Vuex', 'Axios', 'PusherJs', 'Leaflet'],
        platform: 'Web',
        type: 'Freelance',
        source_code: [],
        images_path: '/portfolio/images/cbdrgms',
        images_num_web: [],
    },
    {
        name: "Ticketing System",
        project_link: "",
        project_logo: "images/system.png",
        description: "Laravel + VueJS + Vuetify",
        long_description: "Maintained and implemented updates in the existing ticketing system, including multiple label filtering for tickets, geolocation filtering for nearby branches, a feature to suggest tickets to agents with a low-ticket assignment count, and bug fixes. Additionally developed a web-based application for end users to integrate with an in-house ticketing system, utilizing Laravel scheduler for synchronizing cloud and local databases.",
        technology: ['Laravel', 'Laravel Schuduler', 'VueJS', 'Vuetify', 'Vuex', 'Axios', 'Websocket', 'Leaflet'],
        platform: 'Web',
        type: 'Internship',
        source_code: [],
        images_path: '/portfolio/images/ts',
        images_num_web: [],
    },
    {
        name: "Portfolio",
        project_link: "https://danerismendoza.github.io/portfolio/",
        project_logo: "images/system.png",
        description: "ReactJS + Tailwind + MUI",
        long_description: "Compilation of my highlight projects.",
        technology: ['ReactJS', 'Tailwind', 'MUI'],
        platform: 'Web',
        type: 'Personal',
        source_code: 'https://github.com/DanerisMendoza/portfolio',
        images_path: '/portfolio/images/portfolio',
        images_num_web: [],
    },
    {
        name: "E-library system",
        project_link: "",
        project_logo: "images/system.png",
        description: "jQuery + Bootstrap + PHP + MySQL",
        long_description: "I collaborated on coding with students from other computer studies courses. Our team consisted of four developers and four QA testers.",
        technology: ['jQuery', 'Bootstrap', 'PHP', 'MySQL', 'PHP Mailer', 'Cron Jobs'],
        platform: 'Web',
        type: 'Practicum 2',
        source_code: [],
        images_path: '/portfolio/images/ts',
        images_num_web: [],
    },
    {
        name: "Blockchain Student Council Voting System ",
        project_link: "",
        project_logo: "images/system.png",
        description: "Vue + Vuetify + Laravel + Solidity + PWA",
        long_description: "Implementation of Blockchain Technology in Student Council Voting System",
        technology: ['Vue', 'Vuetify', 'Laravel', 'Solidity', 'Ganache', 'Blockchain Technology'],
        platform: 'Web & Mobile',
        type: 'Academic 4th Year Case Study',
        source_code: 'https://github.com/DanerisMendoza/voting-blockchain',
        images_path: '/portfolio/images/bscvs',
        images_num_web: [],
    },
    {
        name: "Ordering Management System",
        project_link: "",
        project_logo: "images/system.png",
        description: "jQuery + Bootstrap + PHP + MySQL + Java Native Mobile",
        long_description: "Ordering System for a restaurant with rfid and fpdf for reciept.",
        technology: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Java Native Mobile', 'Volley'],
        platform: 'Web & Mobile',
        type: 'Academic 3rd Year Case Study',
        source_code: 'https://github.com/DanerisMendoza/Web-based-ordering-management-system',
        images_path: '/portfolio/images/weboms',
        images_num_web: [],
    },
    {
        name: "Smart Trash Can",
        project_link: "",
        project_logo: "images/system.png",
        description: "Java Native Mobile, Internet of Things",
        long_description: "Realtime Notification for Monitoring, Open and Close Cover of Smart Trashcan Using Mobile.",
        technology: ['Java Native Mobile', 'MySQL', 'Volley'],
        platform: 'Mobile',
        type: 'Academic 3rd Year Case Study',
        source_code: 'https://github.com/DanerisMendoza/smart-trashCan',
        images_path: '/portfolio/images/cmt',
        images_num_web: [],
    },
    {
        name: "Cash Management Tracker",
        project_link: "",
        project_logo: "images/system.png",
        description: "Java Native Mobile + SQLITE",
        long_description: "Expenses tracker with Dynamic Analytics of expenses by date and category.",
        technology: ['Java Native Mobile', 'SQLITE'],
        platform: 'Mobile',
        type: 'Academic 2nd Year Case Study',
        source_code: 'https://github.com/DanerisMendoza/cashManagementTracker',
        images_path: '/portfolio/images/cmt',
        images_num_web: [],
    },
    {
        name: "Vaccination System",
        project_link: "",
        project_logo: "images/system.png",
        description: "C# + MySQL",
        long_description: "Vaccination Simulation System with Dynamic Graph Analytics of Vaccinated and Unvaccinated User per barangay, generate and read QR code functionality.",
        technology: ['C#', 'MySQL'],
        platform: 'Window',
        type: 'Academic 2nd Year Case Study',
        source_code: 'https://github.com/DanerisMendoza/Vaccination-Consensus-System',
        images_path: '/portfolio/images/vc',
        images_num_web: [],
    },
    ];

    const modules = [Pagination];
    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState('');

    const handleClickOpen = (project) => {
        setSelectedProject(project)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="h-screen w-screen max-w-7xl m-center ">
            <React.Fragment>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                >
                    <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: '#000000' }}>
                        <Toolbar>
                            <Button color="inherit" onClick={handleClose} startIcon={<ArrowBackIosNewIcon />} >
                                Back
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <DialogContent className='mr-3'>
                        <Card className='drop-shadow-2xl'>
                            <CardContent className='lg:drop-shadow-2xl flex flex-col lg:flex-row lg:gap-5'>
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    centeredSlides={true}
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    className="mySwiper  w-full self-center lg:w-3/5"
                                >
                                    {selectedProject && (
                                        (selectedProject.images_num_web && selectedProject.images_num_web.length > 0) ||
                                        (selectedProject.images_num_mobile && selectedProject.images_num_mobile.length > 0)
                                    ) ? (
                                        <>
                                            {/* Render web images */}
                                            {selectedProject.images_num_web && selectedProject.images_num_web.length > 0 && selectedProject.images_num_web.map((image, index) => (
                                                <SwiperSlide key={`web${index}`}>
                                                    <img className='img_slide_web lg:pb-8' src={`${selectedProject.images_path}/web/${index}.png`} alt='app' />
                                                </SwiperSlide>
                                            ))}

                                            {/* Render mobile images */}
                                            {selectedProject.images_num_mobile && selectedProject.images_num_mobile.length > 0 && selectedProject.images_num_mobile.map((image, index) => (
                                                <SwiperSlide key={`mobile${index}`}>
                                                    <img className='img_slide_mobile lg:pb-8' src={`${selectedProject.images_path}/mobile/${index}.png`} alt='app' />
                                                </SwiperSlide>
                                            ))}
                                        </>
                                    ) : (
                                        <SwiperSlide>
                                            <div className="flex flex-col items-center text-center ">
                                                <img className='imgSlide2 lg:pb-8' src='/portfolio/images/system.png' alt='app' />
                                            </div>
                                        </SwiperSlide>
                                    )}


                                </Swiper>
                                <div className='h-auto flex flex-col  lg:w-2/5 project_description'>
                                    <p className='text-center p-3 lg:mb-8 lg:border border-black border-opacity-50 rounded-lg'>
                                        {selectedProject.name}
                                    </p>

                                    <div className='h-full flex flex-col items-start gap-4 '>
                                        <div className='flex flex-row flex-wrap gap-1 ' >
                                            <div>Technology Used:&nbsp;</div>
                                            {selectedProject && selectedProject.technology && selectedProject.technology.map((item, index) => (
                                                <Chip key={index} label={item} />
                                            ))}
                                        </div>

                                        <div className='flex flex-row gap-2 items-center'>
                                            <div>Project Type:&nbsp;</div>
                                            <Chip label={selectedProject.type}></Chip>
                                        </div>

                                        <div className='flex flex-row gap-2 items-center'>
                                            <div>Platform:&nbsp;</div>
                                            <Chip label={selectedProject.platform}></Chip>
                                        </div>

                                        <div className='flex flex-col'>
                                            <p>Description: </p>
                                            <div className='pr-6'>{selectedProject.long_description}</div>
                                        </div>

                                        {selectedProject && selectedProject.functionality && (
                                            <>
                                                <div className='flex flex-col flex-wrap gap-1  '>
                                                    <div>Functionality:</div>
                                                    {selectedProject.functionality.map((item, index) => (
                                                        <p key={index}>• {item}.</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        {selectedProject && selectedProject.demo_accounts && (
                                            <>
                                                <div className='flex flex-col flex-wrap gap-1  '>
                                                    <div>Demo Accounts:&nbsp;</div>
                                                    <SimpleTreeView >
                                                        {selectedProject.demo_accounts.map((item, index) => (
                                                            <TreeItem key={`role${item.role}${index}`} itemId={`role${item.role}${index}`} label={item.role}>
                                                                <TreeItem itemId={`username${item.username}${index}`} label={`Username: ${item.username}`}></TreeItem>
                                                                <TreeItem itemId={`password${item.password}${index}`} label={`Password: ${item.password}`}></TreeItem>
                                                            </TreeItem>
                                                        ))}
                                                    </SimpleTreeView>
                                                </div>
                                            </>
                                        )}
                                        <div className='grow'></div>
                                        <div className='self-end flex flex-row gap-2'>
                                            {!Array.isArray(selectedProject.source_code) && selectedProject.source_code && (
                                                <a href={selectedProject.source_code} target="_blank" className="btn grow enlarge ">
                                                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                                                </a>
                                            )}
                                            {selectedProject && selectedProject.project_link && (
                                                <a href={selectedProject.project_link} target="_blank" className="btn grow enlarge ">
                                                    <FontAwesomeIcon icon={faLink} size="2xl" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
            <div className='flex flex-row items-center justify-center text-5xl' >
                <DeveloperModeIcon fontSize="large" />
                <p >Portfolio</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                modules={modules}
                pagination={{ clickable: true }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    600: { slidesPerView: 2 },
                    768: { slidesPerView: 3 }
                }}
                initialSlide={0}
            >

                {slidesData.map((project, index) => (
                    <SwiperSlide key={project.name} style={{ height: '33rem', display: 'flex', alignItems: 'center', padding: '1rem' }} >
                        <Card>
                            <CardContent>
                                <div className="flex flex-col justify-start bg-white w-full h-96 p-6  m-center  drop-shadow-2xl ">
                                    <Chip label={project.type} className="mb-2 self-end ">
                                    </Chip>
                                    <div className="grow flex flex-col items-center text-center">
                                        <img src="/portfolio/images/system.png" alt='app' style={{ width: '40%' }} />
                                        <p className=' text-2xl font-semibold'>{project.name}</p>
                                        <p className=' text-xl text-gray-400'>{project.description}</p>
                                    </div>
                                    <div className="self-center flex flex-row gap-3 items-center">
                                        {!Array.isArray(project.source_code) && project.source_code && (
                                            <a href={project.source_code} target="_blank" className="btn grow enlarge">
                                                <FontAwesomeIcon icon={faGithub} size="2xl" />
                                            </a>
                                        )}
                                        <FontAwesomeIcon onClick={() => handleClickOpen(project)} className='enlarge pl-2 pr-2' style={{ color: '#000000', border: '1px solid #000000', borderRadius: '12%' }} icon={faEllipsis} size="2xl" />
                                        {project.project_link && (
                                            <a href={project.project_link} target="_blank" className="btn grow enlarge">
                                                <FontAwesomeIcon icon={faLink} size="2xl" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

