import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function BasicCard() {
    return (
        <div className="w-screen flex flex-col items-center justify-center pb-48 ">
            <h2 className="text-5xl text-black text-center ">Skills</h2>
            <div className="flex mt-20 flex-col lg:flex-row gap-10">
                <Card >
                    <CardContent>
                        <div
                            className="bg-white drop-shadow-2xl " style={{ height: '28rem' }}
                        >
                            <h2 className="text-2xl  text-center pt-5">Frontend</h2>
                            <div
                                className=" grid grid-cols-4 gap-4 m-auto lg:px-10 px-5 pt-10"
                            >
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png"
                                        className="h-14"
                                        alt="VUEJS"
                                    />
                                    <span className="">VueJs</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
                                        className="h-14"
                                        alt="ReactJs"
                                    />
                                    <span className="">ReactJs</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="/portfolio/images/logo/ionic.png"
                                        className="h-14"
                                        alt="Ionic"
                                    />
                                    <span className="">Ionic</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="/portfolio/images/logo/Jquery.png"
                                        className="h-14"
                                        alt="Jquery"
                                    />
                                    <span className="">jQuery</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
                                        className="h-14"
                                        alt="JavaScript"
                                    />
                                    <span className="">JavaScript</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20210506173343"
                                        className="h-14"
                                        alt="TypeScript"
                                    />
                                    <span className="">TypeScript</span>
                                </div>

                                <div className="p-1 card-mini">
                                    <img
                                        src="/portfolio/images/logo/vuetify.png"
                                        className="h-14"
                                        alt="Vuetify"
                                    />
                                    <span className="">Vuetify</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://mui.com/static/logo.png"
                                        className="h-14"
                                        alt="MaterialUI"
                                    />
                                    <span className="">MaterialUI</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
                                        className="h-14"
                                        alt="Tailwind"
                                    />
                                    <span className="">Tailwind</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                                        className="h-14"
                                        alt="Bootstrap"
                                    />
                                    <span className="">Bootstrap</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png"
                                        alt="HTML5"
                                        className="h-14"
                                    />
                                    <span className="">HTML5</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"
                                        className="h-14"
                                        alt="CSS"
                                    />
                                    <span className="">CSS</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="/portfolio/images/logo/sass.png"
                                        className="h-14"
                                        alt="SASS"
                                    />
                                    <span className="">SASS</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card >
                    <CardContent>
                        <div
                            className="bg-white drop-shadow-2xl" style={{ height: '28rem' }}
                        >
                            <h2 className="text-2xl  text-center pt-5">Backend</h2>
                            <div
                                className=" grid grid-cols-4 gap-4 m-auto lg:px-10 px-5 pt-10"
                            >
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/121px-Laravel.svg.png"
                                        className="h-14"
                                        alt="Laravel"
                                    />
                                    <span className="">Laravel</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
                                        className="h-14"
                                        alt="PHP"
                                    />
                                    <span className="">PHP</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
                                        className="h-14"
                                        alt="Mysql"
                                    />
                                    <span className="">Mysql</span>
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card >
                    <CardContent>
                        <div
                            className="bg-white drop-shadow-2xl " style={{ height: '28rem' }}
                        >
                            <h2 className="text-2xl  text-center pt-5">Others</h2>
                            <div
                                className=" grid grid-cols-4 gap-4 m-auto lg:px-10 px-5 pt-10"
                            >
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                                        className="h-14"
                                        alt="Git"
                                    />
                                    <span className="">Git</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
                                        className="h-14"
                                        alt="Jira"
                                    />
                                    <span className="">Jira</span>
                                </div>
                                <div className="p-1 card-mini">
                                    <img
                                        src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format"
                                        className="h-14"
                                        alt="Figma"
                                    />
                                    <span className="">Figma</span>
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}