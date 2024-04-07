import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import School from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Work from '@mui/icons-material/Work';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
    return (
        <div className="h-screen max-w-7xl m-center pb-20 ">
            <h2 className="text-5xl text-black text-center mb-6">My Journey</h2>

            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined" className="enlarge">
                            <LaptopMacIcon fontSize="large"/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Card >
                            <CardMedia
                                sx={{
                                    height: 100,
                                    bgcolor: 'gray',
                                }}
                            >
                                <div className='h-full flex flex-col justify-center '>
                                    <h3 className="text-center text-base  md:text-2xl text-gray-100 pt-2"> Freelance</h3>
                                </div>
                            </CardMedia>

                            <CardContent>
                                <h3 className="text-center text-base md:text-2xl text-gray-500">November 2023 - Present</h3>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className="enlarge">
                            <School fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Card >
                            <CardMedia
                                sx={{
                                    height: 100,
                                    bgcolor: 'gray',
                                }}
                            >
                                <div className='h-full flex flex-col justify-center '>
                                    <h3 className="text-center text-base md:text-2xl text-gray-100  pt-2">Graduation</h3>
                                    <h3 className="text-center text-base md:text-2xl text-gray-100  pt-2">BS Computer Science</h3>
                                </div>
                            </CardMedia>

                            <CardContent>
                                <h3 className="text-center text-base md:text-2xl text-gray-500"> July 2020 - July 2024</h3>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined" className="enlarge">
                            <Work fontSize="large" />
                        </TimelineDot>

                    </TimelineSeparator>
                    <TimelineContent >
                        <Card >
                            <CardMedia
                                sx={{
                                    height: 100,
                                    bgcolor: 'gray',
                                }}
                            >
                                <div className='h-full flex flex-col justify-center '>
                                    <h3 className="text-center text-base md:text-2xl text-gray-100 pt-2">   Fullstack Developer Internship at Ingco PH</h3>
                                </div>
                            </CardMedia>

                            <CardContent>
                                <h3 className="text-center text-base md:text-2xl text-gray-500"> June 2023 - August 2023</h3>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>


            </Timeline>

        </div>
    );
}