import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import SimpleGallery from './SimpleGallery';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndex, setIsFullScreen } from '../store/portfolio/fullscreen';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

export default () => {

    const slidesData = [
        {
            name: "E-Palengke",
            project_link: "https://epalengke.shop/",
            project_logo: "images/system.png",
            description: "Laravel + VueJS + Vuetify + Ionic",
            long_description: "Nearby e-commerce geolocation and radius based. It consist of 4 user roles: Admin, Seller, Customer and Delivery. Aims to provide a convenient online shopping experience for homebound individuals, It also provides employment to local residents as foot-based delivery personnel, fostering income generation without any initial investment.",
            technology: ['Laravel.10', 'MySQL', 'Websocket', 'Typescript', 'Javascript', 'PusherJS', 'VueJS.2', 'Vuetify', 'Vuex', 'Axios', 'Ionic/VueJS.3', 'Vite', 'Capacitor', 'Leaflet', 'Firebase(Push Notification)', 'Swal2'],
            platform: ['Web', 'Mobile'],
            status: ['Completed'],
            type: 'Acad Thesis',
            role: ["Full Stack Developer", "Project Lead"],
            source_code: [{ Frontend: 'https://github.com/DanerisMendoza/e-palengke-front' }, { Backend: 'https://github.com/DanerisMendoza/e-palengke-back' }, { Mobile: 'https://github.com/DanerisMendoza/e-palengke-ionic' }],
            images_path: '/portfolio/images/e-palengke',
            images_num_web: 19,
            images_num_mobile: 6,
            demo_accounts: [
                { role: 'Admin', username: 'admin', password: 'admin' },
                { role: 'Customer', username: 'patrick', password: '123' },
                { role: 'Seller', username: 'thomas', password: '123' },
                { role: 'Delivery', username: 'antonio', password: '123' },
            ],
            higlights: [
                'Implemented Dynamic end-user requirements based on administrator preferences',
                'User role access is stored in the database for code maintainability and future upgrades',
                'Used Laravel Passport for Secure User Authentication',
                'Utilized PusherJS/Websockets for realtime orders',
                'Utilized Laravel Eloquent ORM and Query Builder to enhance queries',
                'Utilized Modern framework advantage to build cross platform development using Ionic/Vue',
                'Implemented Firebase Push Notifications to enhance user convenience while awaiting orders',
            ],
            isWebFirst: true,
        },
        {
            name: "Research Repo",
            project_link: "",
            project_logo: "images/system.png",
            description: "Laravel + VueJS + Vuetify",
            long_description: "Cloud Based Research Repository. It consist of 5 user roles: Admin, Dean, Chairperson, Professor and Student.",
            technology: ['Laravel.10', 'VueJS.2', 'Vuetify', 'Vuex', 'Axios'],
            platform: ['Web'],
            status: ['Active'],
            type: 'Freelance',
            role: ["Full Stack Developer"],
            source_code: [],
            images_path: '/portfolio/images/rms',
            images_num_web: 4,
            higlights: [
                'Used Apex Chart for Dynamic Analytics of Colleges, Department, Year and Month',
                'Implemented recaptcha in login to avoid request spamming',
                'Used JSPDF, pdf-viewer and html2pdf for Research Module',
            ],
            isWebFirst: true,
        },
        {
            name: "Disaster & Risk",
            project_link: "",
            project_logo: "images/system.png",
            description: "Laravel + VueJS + Vuetify",
            long_description: "Realtime Cloud Based Disaster and Risked Geospatial Management System. It consist of 2 user roles: End User and Admin.",
            technology: ['Laravel.10', 'VueJS.3', 'Vite', 'Vuetify', 'Vuex', 'Axios', 'PusherJS', 'Leaflet'],
            platform: ['Web'],
            status: ['Active'],
            type: 'Freelance',
            role: ["Full Stack Developer"],
            source_code: [],
            images_path: '/portfolio/images/cbdrgms',
            images_num_web: 11,
            higlights: [
                'Utilized PusherJS/Websockets for realtime end user report that will reflect in vue leaflet map',
                'Implement customizable icon that can be use in leaflet map pin like fire, traffic, typhoon etc',
                'Utilized Vuetify and CSS for Responsive Web And Mobile Platform',
            ],
            isWebFirst: true,
        },
        {
            name: "Flash Card Repo",
            project_link: "",
            project_logo: "images/system.png",
            description: "MERN Stack",
            long_description: "Anki and Quizlet Project Inspired, Using MERN Stack to build Memory Flash Card Repository and consist of 2 user roles: End User and Admin",
            technology: ['ReactJS', 'Vite', 'Tailwind CSS', 'MUI', 'Redux Toolkit', 'Node JS', 'Express JS', 'JWT', 'Multer', 'Mongoose', 'MongoDB'],
            platform: ['Web'],
            status: ['Active'],
            type: 'Personal',
            role: ["Full Stack Developer"],
            source_code: [{ Frontend: 'https://github.com/DanerisMendoza/memo-flash-front' }, { Backend: 'https://github.com/DanerisMendoza/memo-flash-back' }, { Mobile: 'https://github.com/DanerisMendoza/memo-flash-mobile' }],
            images_path: '/portfolio/images/fcr',
            images_num_web: 5,
            higlights: [
                'Utilized MERN Stack while maintaining structure of my past projects',
                'Implement MVC Architecture in NodeJS',
                'Implement NoSQL using MongoDB to store data in various formats',
                'Used JWT for secure user account authentication',
                'Implemented multiple user role and dynamic navigation for access',
                'Used MUI combined with Tailwind CSS to build a responsive UI for web and mobile',
                'Utilized Redux Toolkit for providing easy access to data for other components',
            ],
            isWebFirst: true,
        },
        {
            name: "Portfolio",
            project_link: "https://danerismendoza.github.io/portfolio/",
            project_logo: "images/system.png",
            description: "ReactJS + Tailwind CSS + MUI",
            long_description: "Documented and compiled my previous projects.",
            technology: ['ReactJS', 'Tailwind CSS', 'MUI', 'Redux Toolkit'],
            platform: ['Web'],
            status: ['Active'],
            type: 'Personal',
            role: ["Full Stack Developer"],
            source_code: 'https://github.com/DanerisMendoza/portfolio',
            images_path: '/portfolio/images/portfolio',
            images_num_web: 1,
            higlights: [
                'Integrate Swiper JS and PhotoSwipe to enhance the user interface for selected project images',
                'Implemented Redux Toolkit to seamlessly integrate data from PhotoSwipe prebuilt components',
                'Utilized MUI combined with Tailwind CSS to create a fast and responsive UI design',
            ],
            isWebFirst: true,
        },
        {
            name: "Blockchain Voting",
            project_link: "",
            project_logo: "images/system.png",
            description: "Laravel + Vue + Vuetify + Solidity + PWA",
            long_description: "Implementation of Blockchain Technology in Student Council Voting System, I developed the PWA version (in the 'mobile' folder), I set up the backend using Laravel and the blockchain using the test network Ganache.  My case study partner developed the web version, The system consists of two user roles: admin for the web and end user for mobile (PWA).",
            technology: ['Vue', 'Vuetify', 'Laravel', 'Solidity', 'Ganache', 'Blockchain Technology'],
            platform: ['Web', 'Mobile'],
            status: ['Completed'],
            type: 'Acad 4th Year Case Study',
            role: ["Full Stack Developer", "Project Lead"],
            source_code: 'https://github.com/DanerisMendoza/voting-blockchain',
            images_path: '/portfolio/images/bv',
            images_num_web: 5,
            images_num_mobile: 9,
            higlights: [
                'Used solidity to create a smart contract for immutable voting',
                'Utilized Ganache test network to store votes on the blockchain',
                'Secured voting results by reading blockchain data and visualizing it with ApexCharts'
            ],
            isWebFirst: false,
        },
        {
            name: "WEBOMS",
            project_link: "",
            project_logo: "images/system.png",
            description: "jQuery + Bootstrap + PHP + Java Native Mobile",
            long_description: "Ordering System for a restaurant. It consist of 4 user roles: Admin, Manager, Cashier and Customer, Aims to creates a list of orders to a restaurant through a web system. It also has Point of Sale (POS) with thermal printing for physical transactions and inventory for managing stocks. It has responsive design to be able to be used in any kind of devices like mobile, tablet, laptop, and pc.",
            technology: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'TCPDF', 'Java Native Mobile', 'Volley', 'Glide'],
            platform: ['Web', 'Mobile'],
            status: ['Completed'],
            type: 'Acad 3rd Year Case Study',
            role: ["Full Stack Developer", "Project Lead"],
            source_code: [{ Web: 'https://github.com/DanerisMendoza/WEBOMS-WEB' }, { Mobile: 'https://github.com/DanerisMendoza/WEBOMS-MOBILE' }],
            images_path: '/portfolio/images/weboms',
            images_num_web: 24,
            images_num_mobile: 8,
            demo_accounts: [
                { role: 'Admin', username: 'admin', password: 'passsword' },
            ],
            higlights: [
                'Implemented PHP Mailer OTP to verify user accounts and filter out fake users',
                'Use pie and bar graphs to represent the sales report for daily, weekly, and monthly data',
                'Developed a native mobile app to integrate with the web system for user ordering convenience',
                'Modules includes Inventory, POS, Top-up, Orders, Sales Report, Feedback and User Accounts',
                'Seamless payments by integrating hardware RFID and updating user details in the database',
            ],
            isWebFirst: true,
        },
        {
            name: "Smart Trash Can",
            project_link: "",
            project_logo: "images/system.png",
            description: "Java Native Mobile + Internet of Things",
            long_description: "Realtime trash level monitoring.",
            technology: ['Java Native Mobile', 'MySQL', 'Volley', 'Internet of Things', 'ESP8266W', 'Ultrasonic', 'Servo'],
            platform: ['Mobile'],
            status: ['Completed'],
            type: 'Acad 3rd Year Case Study',
            role: ["Full Stack Developer"],
            source_code: 'https://github.com/DanerisMendoza/smart-trashCan',
            images_path: '/portfolio/images/cmt',
            images_num_web: 0,
            higlights: [
                'Utilized ultrasonic sensor to measure trash levels',
                'Used Servo to open and close trashcan lid',
                'Used ESP8266W for server connection and realtime monitoring of trash levels',
            ],
            isWebFirst: true,
        },
        {
            name: "Expenses Tracker",
            project_link: "",
            project_logo: "images/system.png",
            description: "Java Native Mobile + SQLITE",
            long_description: "Expenses tracker with Dynamic Analytics of expenses by date and category, it consist of 1 user role: End User",
            technology: ['Java Native Mobile', 'SQLITE', 'Any Chart'],
            platform: ['Mobile'],
            status: ['Completed'],
            type: 'Acad 2nd Year Case Study',
            role: ["Full Stack Developer", "Project Lead"],
            source_code: 'https://github.com/DanerisMendoza/cashManagementTracker',
            images_path: '/portfolio/images/cmt',
            images_num_web: 0,
            images_num_mobile: 9,
            higlights: [
                'Used AnyChart for analytics of expenses by category and date using bar and pie graph',
                'Used SQLITE for storing of expenses and category'
            ],
            isWebFirst: true,
        },
        // {
        //     name: "Ticketing System",
        //     project_link: "",
        //     project_logo: "images/system.png",
        //     description: "Laravel + VueJS + Vuetify",
        //     long_description: "Maintained and implemented updates in the existing ticketing system, including multiple label filtering for tickets, geolocation filtering for nearby branches, a feature to suggest tickets to agents with a low-ticket assignment count, and bug fixes. Additionally developed a web-based application for end user to integrate with an in-house ticketing system, utilizing Laravel scheduler for synchronizing cloud and local databases.",
        //     technology: ['Laravel.9', 'Laravel Scheduler', 'VueJS.2', 'Vuetify', 'Vuex', 'Axios', 'Websocket', 'Leaflet'],
        //     platform: ['Web'],
        //     type: 'Internship',
        //     role: ["Full Stack Developer"],
        //     status: ['Project Handover'],
        //     source_code: [],
        //     images_path: '/portfolio/images/ts',
        //     images_num_web: 0,
        //     isWebFirst: true,
        // },
        // {
        //     name: "E-Library system",
        //     project_link: "",
        //     project_logo: "images/system.png",
        //     description: "jQuery + Bootstrap + PHP",
        //     long_description: "I collaborated on coding with students from other computer studies courses. Our team consisted of four developers and four QA testers.",
        //     technology: ['jQuery', 'Bootstrap', 'PHP', 'MySQL', 'PHP Mailer', 'Cron Jobs'],
        //     platform: ['Web'],
        //     status: ['Project Handover'],
        //     type: 'Practicum 2',
        //     role: ["Full Stack Developer"],
        //     source_code: [],
        //     images_path: '/portfolio/images/ts',
        //     images_num_web: 0,
        //     isWebFirst: true,
        // },


        {
            name: "Vaccination",
            project_link: "",
            project_logo: "images/system.png",
            description: "C# + MySQL",
            long_description: "Vaccination Simulation, It consist of 2 user role: end user and Admin. This is my first project :D",
            technology: ['C#', 'MySQL'],
            platform: ['Window'],
            status: ['Completed'],
            type: 'Acad 2nd Year Case Study',
            role: ["Full Stack Developer", "Project Lead"],
            source_code: 'https://github.com/DanerisMendoza/Vaccination-Consensus-System',
            images_path: '/portfolio/images/vaccination',
            images_num_web: 7,
            higlights: [
                'Implement read and generate QR code to validate end user vaccination validty',
                'Implement Dynamic pie graph to vizualize End User vaccination status per barangay',
            ],
            isWebFirst: true,
        },
    ];
    const theme = useTheme();
    const fullscreenReducer = useSelector((state) => state.fullscreenReducer);
    const activeIndex = fullscreenReducer.activeIndex;
    const [open, setOpen] = React.useState(false);
    const [multipleLinks, setMultipleLinks] = React.useState([]);
    const [selectedProject, setSelectedProject] = React.useState('');
    const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(null);
    const [swiper, setSwiper] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagesLoading, setImagesLoading] = useState(true); // State to keep track of loading images


    const dynamicSystemLogo = (fill) => {
        const svgContent = `
          <svg xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="128" height="128" version="1.1"  >
          <rect x="25.140625" y="30.265627" width="77.75" height="54.9375"  fill="${isDark ? '#31363f' : '#ffffff'}"/>
            <path fill="${fill}" fill-opacity="1" d="m 22.171875,22.046877 c -3.97497,0 -7.1875,3.181281 -7.1875,7.15625 l 0,57 c 0,3.974969 3.21253,7.1875 7.1875,7.1875 l 83.687505,0 c 3.97497,0 7.15625,-3.212531 7.15625,-7.1875 l 0,-57 c 0,-3.974969 -3.18128,-7.15625 -7.15625,-7.15625 l -83.687505,0 z m 2.96875,8.21875 77.750005,0 0,54.9375 -77.750005,0 0,-54.9375 z m 27.53125,4.90625 -1.09375,2.34375 -0.0312,0.5 0.34375,1.65625 -2.1875,0.875 -0.875,-1.375 -0.40625,-0.375 -2.40625,-0.84375 -0.84375,0.8125 0.84375,2.4375 0.375,0.375 1.40625,0.90625 -0.90625,2.1875 -1.625,-0.34375 -0.53125,0 -2.34375,1.125 0,1.1875 2.34375,1.125 0.53125,0 1.625,-0.34375 0.90625,2.15625 -1.40625,0.9375 -0.375,0.375 -0.84375,2.4375 0.84375,0.84375 2.40625,-0.875 0.40625,-0.375 0.875,-1.375 2.1875,0.875 -0.34375,1.65625 0.0312,0.5 1.09375,2.34375 1.1875,0 1.09375,-2.34375 0.0312,-0.5 -0.3437,-1.65625 2.1875,-0.875 0.875,1.375 0.40625,0.375 2.40625,0.875 0.84375,-0.84375 -0.84375,-2.4375 -0.34375,-0.375 -1.40625,-0.9375 0.90625,-2.15625 1.59375,0.34375 0.5625,0 2.3125,-1.125 0,-1.1875 -2.3125,-1.125 -0.5625,0 -1.59375,0.34375 -0.90625,-2.1875 1.40625,-0.90625 0.34375,-0.375 0.84375,-2.4375 -0.84375,-0.8125 -2.40625,0.84375 -0.40625,0.375 -0.875,1.375 -2.1875,-0.875 0.34375,-1.65625 -0.0312,-0.5 -1.09375,-2.34375 -1.1875,0 z m 0.59375,7.3125 c 1.97188,0 3.59375,1.590615 3.59375,3.5625 0,1.971885 -1.62187,3.5625 -3.59375,3.5625 -1.97189,0 -3.5625,-1.590615 -3.5625,-3.5625 0,-1.971885 1.59061,-3.5625 3.5625,-3.5625 z m 12.25,6.9375 -1.53125,0.46875 -0.34375,3.09375 0.21875,0.8125 0.84375,1.625 -2.4375,1.78125 -1.28125,-1.34375 -0.71875,-0.40625 -3.03125,-0.625 -0.90625,1.28125 1.46875,2.6875 0.65625,0.53125 1.65625,0.8125 -0.90625,2.875 -1.84375,-0.3125 -0.8125,0.0625 -2.8125,1.28125 0,1.59375 2.8125,1.28125 0.8125,0.09375 1.84375,-0.34375 0.90625,2.875 -1.65625,0.8125 -0.65625,0.53125 -1.46875,2.71875 0.90625,1.25 3.03125,-0.59375 0.71875,-0.4375 1.28125,-1.34375 2.4375,1.78125 -0.84375,1.65625 -0.21875,0.8125 0.34375,3.0625 1.53125,0.5 2.09375,-2.28125 0.28125,-0.78125 0.28125,-1.8125 3.03125,0 0.25,1.8125 0.3125,0.78125 2.09375,2.28125 1.53125,-0.5 0.34375,-3.0625 -0.1875,-0.8125 -0.875,-1.65625 2.4375,-1.78125 1.28125,1.34375 0.71875,0.4375 3.03125,0.59375 0.9375,-1.25 -1.5,-2.71875 -0.65625,-0.53125 -1.65625,-0.8125 0.9375,-2.875 1.84375,0.34375 0.8125,-0.09375 2.78125,-1.28125 0,-1.59375 -2.78125,-1.28125 -0.8125,-0.0625 -1.84375,0.3125 -0.9375,-2.875 1.65625,-0.8125 0.65625,-0.53125 1.5,-2.6875 -0.9375,-1.28125 -3.03125,0.625 -0.71875,0.40625 -1.28125,1.34375 -2.4375,-1.78125 0.875,-1.625 0.1875,-0.8125 -0.34375,-3.09375 -1.53125,-0.46875 -2.09375,2.28125 -0.3125,0.75 -0.25,1.84375 -3.03125,0 -0.28125,-1.84375 -0.28125,-0.75 -2.09375,-2.28125 z m 4.15625,9.5 c 3.27723,0 5.96875,2.660262 5.96875,5.9375 0,3.277237 -2.69152,5.9375 -5.96875,5.9375 -3.27724,0 -5.9375,-2.660263 -5.9375,-5.9375 0,-3.277238 2.66026,-5.9375 5.9375,-5.9375 z m -29.9375,39.40625 c -4.23032,0 -7.625,3.394673 -7.625,7.624993 l 63.84375,0 c 0,-4.23032 -3.42593,-7.624993 -7.65625,-7.624993 l -48.5625,0 z"></path>
          </svg>
        `;
        return `data:image/svg+xml;base64,${btoa(svgContent)}`;
    };

    const isDark = useSelector((state) => state.themeReducer.isDarkGlobal);
    useEffect(() => {
        if (isDark) {
            setSystemLogo(dynamicSystemLogo("#ffffff"))
        }
        else {
            setSystemLogo(dynamicSystemLogo("#000000"))
        }
    }, [isDark])

    const [systemLogo, setSystemLogo] = useState(dynamicSystemLogo("#000000"));



    const handleClickOpen = (project, index) => {
        const { images_num_web, images_num_mobile } = project;
        const combinedImagesCount = (images_num_web || 0) + (images_num_mobile || 0);
        const combinedIndexes = Array.from({ length: combinedImagesCount }, (_, index) => index);
        setImagesLoading(true);

        setSelectedProjectIndex(index)
        setSelectedProject(project)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImages([])
        dispatch(setIsFullScreen(false))
    };

    const fetchImages = async () => {
        try {
            if (selectedProject !== '') {
                const imagesPathWeb = `${selectedProject.images_path}/web`;
                const imagesPathMobile = `${selectedProject.images_path}/mobile`;

                const imagePromisesWeb = [];
                for (let index = 0; index < selectedProject.images_num_web; index++) {
                    try {
                        const response = await fetch(`${imagesPathWeb}/${index + 1}.png`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch web image ${index + 1}`);
                        }
                        const blob = await response.blob();
                        const dimensions = await getImageDimensions(blob);
                        imagePromisesWeb.push({ blob, dimensions });
                    } catch (error) {
                        // Handle errors here if needed
                        console.error(error);
                    }
                }
                const imagePromisesMobile = [];
                for (let index = 0; index < selectedProject.images_num_mobile; index++) {
                    try {
                        const response = await fetch(`${imagesPathMobile}/${index + 1}.png`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch web image ${index + 1}`);
                        }
                        const blob = await response.blob();
                        const dimensions = await getImageDimensions(blob);
                        imagePromisesMobile.push({ blob, dimensions });
                    } catch (error) {
                        // Handle errors here if needed
                        console.error(error);
                    }
                }

                try {
                    const imagesWebWithDimensions = await Promise.all(imagePromisesWeb);
                    const imagesMobileWithDimensions = await Promise.all(imagePromisesMobile);
                    const imagesWebObjects = imagesWebWithDimensions.map(({ blob, dimensions }, index) => ({
                        src: blob,
                        platform: 'img_slide_web',
                        folder: 'web',
                        width: dimensions.width,
                        height: dimensions.height,
                        index: index + 1
                    }));

                    const imagesMobileObjects = imagesMobileWithDimensions.map(({ blob, dimensions }, index) => ({
                        src: blob,
                        platform: 'img_slide_mobile',
                        folder: 'mobile',
                        width: dimensions.width,
                        height: dimensions.height,
                        index: index + 1
                    }));
                    let combinedImages = []
                    if (selectedProject.isWebFirst) {
                        combinedImages = [...imagesWebObjects, ...imagesMobileObjects];
                    } else {
                        combinedImages = [...imagesMobileObjects, ...imagesWebObjects];
                    }
                    setSelectedImages(combinedImages);
                } catch (error) {
                    console.error(error);
                    // Handle error
                }
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const getImageDimensions = async (blob) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
            };
            img.onerror = reject;
            img.src = URL.createObjectURL(blob);
        });
    };

    useEffect(() => {
        fetchImages();
    }, [selectedProject]);

    useEffect(() => {
        if (swiper != null && activeIndex != swiper.activeIndex) {
            swiper.slideTo(activeIndex)
        }
    }, [activeIndex]);

    const dispatch = useDispatch();
    const [isLg, setIsLg] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLg(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="h-screen w-screen max-w-7xl m-center ">
            <React.Fragment>

                <Dialog
                    disableEscapeKeyDown
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
                    <DialogContent style={{ backgroundColor: isDark ? '#18191a' : 'white', padding: '0.6rem' }}>
                        <Card style={{ backgroundColor: isDark ? '#242526' : 'white' }} className='drop-shadow-2xl dark:drop-shadow-none'>
                            <div className=' lg:drop-shadow-2xl flex flex-col lg:flex-row lg:gap-5 p-3 lg:p-0 dark:drop-shadow-none'>

                                {selectedImages && selectedImages.length > 0 && (
                                    <SimpleGallery
                                        galleryID="my-test-gallery"
                                        images={selectedImages.map((item, index) => ({
                                            largeURL: URL.createObjectURL(item.src),
                                            width: item.width,
                                            height: item.height,
                                        }))}
                                    />
                                )}

                                {!isLg && (
                                    <div className='w-full flex flex-row items-center mb-2 ml-2 '>
                                        <Button startIcon={<ArrowBackIosNewIcon />}
                                            disabled={imagesLoading}
                                            onClick={() => {
                                                const prevIndex = selectedProjectIndex - 1;
                                                if (slidesData[prevIndex]) {
                                                    const { images_num_web, images_num_mobile } = slidesData[prevIndex];
                                                    const combinedImagesCount = (images_num_web || 0) + (images_num_mobile || 0);
                                                    const combinedIndexes = Array.from({ length: combinedImagesCount }, (_, index) => index);
                                                    setImagesLoading(true)
                                                    setSelectedImages([])
                                                    setSelectedProjectIndex(prevIndex);
                                                    setSelectedProject(slidesData[prevIndex]);
                                                    dispatch(setActiveIndex(0))
                                                }
                                            }}
                                            style={{ color: slidesData[selectedProjectIndex - 1] ? (!isDark ? 'black' : 'white') : 'gray' }} >
                                        </Button>

                                        <p className='grow text-center p-1 border border-black dark:border-white border-opacity-50 rounded-lg dark:text-white'>
                                            {selectedProject.name}
                                        </p>

                                        <Button startIcon={<ArrowForwardIosIcon />}
                                            disabled={imagesLoading}
                                            onClick={() => {
                                                const nextIndex = selectedProjectIndex + 1;
                                                if (slidesData[nextIndex]) {
                                                    const { images_num_web, images_num_mobile } = slidesData[nextIndex];
                                                    const combinedImagesCount = (images_num_web || 0) + (images_num_mobile || 0);
                                                    const combinedIndexes = Array.from({ length: combinedImagesCount }, (_, index) => index);
                                                    setImagesLoading(true)
                                                    setSelectedImages([])
                                                    setSelectedProjectIndex(nextIndex);
                                                    setSelectedProject(slidesData[nextIndex]);
                                                    dispatch(setActiveIndex(0))
                                                }
                                            }}
                                            style={{ color: slidesData[selectedProjectIndex + 1] ? (!isDark ? 'black' : 'white') : 'gray' }}>
                                        </Button>
                                    </div>
                                )}

                                <Swiper
                                    onSwiper={setSwiper}
                                    className="swiper2 w-full self-center  ml-2 lg:ml-0"
                                    pagination={{
                                        dynamicBullets: true,
                                        clickable: true
                                    }}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    centeredSlides={true}
                                    modules={[Keyboard, Navigation, Pagination]}
                                    navigation
                                    onSlideChange={(data) => dispatch(setActiveIndex(data.activeIndex))}
                                    onClick={(data) => {
                                        dispatch(setActiveIndex(data.activeIndex))
                                        dispatch(setIsFullScreen(true))
                                    }}
                                >
                                    {imagesLoading && (
                                        <>
                                            <div className='flex flex-col items-center dark:text-white'>
                                                <CircularProgress />
                                                <p>Loading Images...</p>
                                            </div>
                                        </>
                                    )}

                                    {selectedProject && (
                                        (selectedProject.images_num_web && selectedProject.images_num_web > 0) ||
                                        (selectedProject.images_num_mobile && selectedProject.images_num_mobile > 0)
                                    ) ? (
                                        <>
                                            {selectedImages.length > 0 && selectedImages.map((item, index) => (
                                                <SwiperSlide key={`web${index}`}>
                                                    {selectedImages.platform === 'img_slide_web' ? (
                                                        <img
                                                            className='img_slide_web'
                                                            src={`${selectedProject.images_path}/${item.folder}/${item.index}.png`}
                                                            alt='app'
                                                            onLoad={() => setImagesLoading(false)}
                                                        />
                                                    ) : (
                                                        <img
                                                            className='img_slide_mobile'
                                                            src={`${selectedProject.images_path}/${item.folder}/${item.index}.png`}
                                                            alt='app'
                                                            onLoad={() => setImagesLoading(false)}
                                                        />
                                                    )}

                                                </SwiperSlide>
                                            ))}
                                        </>
                                    ) : (
                                        <SwiperSlide>
                                            <div className="flex flex-col items-center text-center ">
                                                <img className='imgSlide2 pb-9' src={systemLogo} alt='app' onLoad={() => setImagesLoading(false)} />
                                            </div>
                                        </SwiperSlide>
                                    )}
                                    {isLg && imagesLoading && (
                                        <>
                                            <p className='text-sm text-center   dark:text-white pb-8'>
                                                (Click Image To Fullscreen)
                                            </p>
                                        </>
                                    )}
                                </Swiper>



                                <div className='h-full w-full  flex flex-col   project_description lg:bg-white lg:p-2 rounded-lg ml-2 lg:ml-0' style={{ backgroundColor: isDark ? (isLg ? '#31363f' : '') : 'white' }}>
                                    {!isLg && imagesLoading && (
                                        <p className='text-sm text-center pb-3 dark:text-white'>
                                            (Click Image To Fullscreen)
                                        </p>
                                    )}

                                    {isLg && (
                                        <div className='w-full flex flex-row items-center lg:mb-8 '>
                                            <Button startIcon={<ArrowBackIosNewIcon />}
                                                disabled={imagesLoading}
                                                onClick={() => {
                                                    const prevIndex = selectedProjectIndex - 1;
                                                    if (slidesData[prevIndex]) {
                                                        setSelectedImages([])
                                                        setSelectedProjectIndex(prevIndex);
                                                        setSelectedProject(slidesData[prevIndex]);
                                                        setImagesLoading(true)
                                                        dispatch(setActiveIndex(0))
                                                    }
                                                }}
                                                style={{ color: slidesData[selectedProjectIndex - 1] ? (!isDark ? 'black' : 'white') : 'gray' }} >
                                            </Button>

                                            <p className='grow text-center p-3 border border-black dark:border-white border-opacity-50 rounded-lg dark:text-white'>
                                                {selectedProject.name}
                                            </p>

                                            <Button startIcon={<ArrowForwardIosIcon />}
                                                disabled={imagesLoading}
                                                onClick={() => {
                                                    const nextIndex = selectedProjectIndex + 1;
                                                    if (slidesData[nextIndex]) {
                                                        setImagesLoading(true)
                                                        setSelectedImages([])
                                                        setSelectedProjectIndex(nextIndex);
                                                        setSelectedProject(slidesData[nextIndex]);
                                                        dispatch(setActiveIndex(0))
                                                    }
                                                }}
                                                style={{ color: slidesData[selectedProjectIndex + 1] ? (!isDark ? 'black' : 'white') : 'gray' }}>
                                            </Button>
                                        </div>
                                    )}



                                    <div className='h-full flex flex-col items-start gap-3 lg:ml-2 dynamic_description  dark:text-white'  >

                                        <div className='flex flex-row flex-wrap gap-1 items-center' >
                                            <div>Technology Used:&nbsp;</div>
                                            {selectedProject && selectedProject.technology && selectedProject.technology.map((item, index) => (
                                                <Chip key={index} label={item} size="small" color="primary" />
                                            ))}
                                        </div>

                                        <div className='flex flex-row gap-1 items-center'>
                                            <div>Project Type:&nbsp;</div>
                                            <Chip label={selectedProject.type} size="small" color="primary"></Chip>
                                        </div>

                                        <div className='flex flex-row gap-1 items-center'>
                                            <div>Platform:&nbsp;</div>
                                            {selectedProject && selectedProject.platform && selectedProject.platform.map((item, index) => (
                                                <Chip key={index} label={item} size="small" color="primary" />
                                            ))}
                                        </div>

                                        <div className='flex flex-row flex-wrap gap-1 items-center' >
                                            <div>Status:&nbsp;</div>
                                            {selectedProject && selectedProject.status && selectedProject.status.map((item, index) => (
                                                <Chip key={index} label={item} size="small" color="primary" />
                                            ))}
                                        </div>

                                        <div className='flex flex-row gap-1 items-center'>
                                            <div>Role:&nbsp;</div>
                                            {selectedProject && selectedProject.role && selectedProject.role.map((item, index) => (
                                                <Chip key={index} label={item} size="small" color="primary" />
                                            ))}
                                        </div>

                                        <div className='flex flex-col '>
                                            <div className='pr-6'>{selectedProject.long_description}</div>
                                        </div>

                                        {selectedProject && selectedProject.higlights && (
                                            <>
                                                <div className='flex flex-col flex-wrap gap-1  '>
                                                    {/* <div>Higlights:</div> */}
                                                    {selectedProject.higlights.map((item, index) => (
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

                                    </div>

                                    <div className='grow'></div>
                                    <div className='flex flex-row mt-6 lg:mt-0 lg:pt-6 items-center text-md dark:text-white'>
                                        <p className='lg:ml-2'>{(1 + selectedProjectIndex)}/{slidesData.length}</p>
                                        <div className='grow'></div>
                                        <div className='flex flex-row gap-4 pr-3'>
                                            {/*empty icon just to maintain card height even without icon */}
                                            <div className='flex flex-col'>
                                                <FontAwesomeIcon icon={faLink} size="xl" style={{ opacity: '0%' }} />
                                                <p style={{ opacity: '0%' }}>spacer</p>
                                            </div>
                                            {!Array.isArray(selectedProject.source_code) && selectedProject.source_code ? (
                                                <a href={selectedProject.source_code} target="_blank" className=" grow enlarge_litle flex flex-col">
                                                    <FontAwesomeIcon icon={faGithub} size="xl" />
                                                    <p className='text-blue-500'>Source Code</p>
                                                </a>
                                            ) : selectedProject.source_code && selectedProject.source_code.length > 0 && (
                                                <div className='flex flex-col enlarge_litle' onClick={() => setMultipleLinks(selectedProject.source_code)} >
                                                    <FontAwesomeIcon icon={faGithub} className=" grow " size="xl" />
                                                    <p className='text-blue-500'>Source Code</p>
                                                </div>

                                            )}
                                            {selectedProject && selectedProject.project_link && (
                                                <a href={selectedProject.project_link} target="_blank" className=" grow enlarge_litle flex flex-col">
                                                    <FontAwesomeIcon icon={faLink} size="xl" />
                                                    <p className='text-blue-500'>Visit</p>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={multipleLinks.length > 0}
                    sx={{
                        "& .MuiDialog-container": {
                            "& .MuiPaper-root": {
                                margin: 'auto',
                                width: "100%",
                                maxWidth: "350px",  // Set your width here
                                [theme.breakpoints.up('sm')]: {
                                    maxWidth: "450px", // Adjust width for lg breakpoint
                                },
                            },
                        },
                    }}
                >
                    <DialogContent className='' >
                        <IconButton style={{ position: 'absolute', right: '0', top: '0' }} className='self-end' aria-label="delete" onClick={() => setMultipleLinks([])}>
                            <CloseIcon />
                        </IconButton>
                        <div className='pt-4 flex flex-col gap-8'>
                            {multipleLinks.map((link, index) => (
                                <div key={index}>
                                    {Object.entries(link).map(([key, value]) => (
                                        <div key={key} className='flex flex-col lg:flex-row gap-1 justify-center items-center'>
                                            <a href={value} target="_blank" className=" enlarge_litle text-center text-wrap ">
                                                <FontAwesomeIcon icon={faGithub} size="2xl" />
                                                <p>{key} </p>
                                                <p className=' text-blue-500' style={{ fontSize: '0.8rem' }}>{value}</p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </DialogContent>

                </Dialog>
            </React.Fragment>
            <div className='flex flex-row items-center justify-center text-5xl dark:text-white'
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                <DeveloperModeIcon fontSize="large" />
                <p >Portfolio</p>
            </div>
            <Swiper
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="600"
                className='swiper1 '
                style={{
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    // background:'#242526'
                }}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                // centeredSlidesBounds={true}
                modules={[Keyboard, Navigation, Pagination]}
                navigation
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    600: { slidesPerView: 2 },
                    768: { slidesPerView: 3 }
                }}
                keyboard={{
                    enabled: true,
                }}
                initialSlide={0}
            >

                {slidesData.map((project, index) => (
                    <SwiperSlide key={project.name} style={{ height: '33rem', display: 'flex', alignItems: 'center', padding: '1rem' }} >
                        <Card className='rounded-xl w-full' style={{
                            // ff = white && 00 = black
                            backgroundColor: isDark ? '#31363F' : '#ffffff',
                        }}>
                            <CardContent >
                                <div className="flex flex-col justify-start bg-white w-full h-96 p-6  m-center   " style={{
                                    // ff = white && 00 = black
                                    backgroundColor: isDark ? '#31363F' : '#ffffff',
                                }}>
                                    <Chip label={project.type} className="mb-2 self-end  dark:text-white">
                                    </Chip>
                                    <div className="grow flex flex-col items-center text-center  dark:text-white">
                                        {/* <img src="/portfolio/images/system.png" alt='app' style={{ width: '40%' }} /> */}
                                        <img src={systemLogo} alt='app' />

                                        <p className=' text-2xl font-semibold  dark:text-white'>{project.name}</p>
                                        <p className=' text-xl text-gray-400  dark:text-white'>{project.description}</p>
                                    </div>
                                    <div className="self-center flex flex-row gap-3 items-center">
                                        {!Array.isArray(project.source_code) && project.source_code ? (
                                            <a href={project.source_code} target="_blank" className="text-blue-500 grow enlarge">
                                                <FontAwesomeIcon icon={faGithub} size="2xl" />
                                            </a>
                                        ) : project.source_code.length > 0 && (
                                            <>
                                                <FontAwesomeIcon icon={faGithub} size="2xl" className="text-blue-500 grow enlarge" onClick={() => setMultipleLinks(project.source_code)} />
                                            </>
                                        )}
                                        <FontAwesomeIcon onClick={() => handleClickOpen(project, index)} className='enlarge pl-2 pr-2 ' style={{ color: isDark ? '#ffffff' : '#000000', border: isDark ? '1px solid #ffffff' : '1px solid #000000', borderRadius: '12%' }} icon={faEllipsis} size="2xl" />
                                        {project.project_link && (
                                            <a href={project.project_link} target="_blank" className="text-blue-500 grow enlarge">
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

