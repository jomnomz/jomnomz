    import aboutMePic from '../../assets/aboutMe/aboutMePic.png'
    import SchoolIcon from '@mui/icons-material/School';
    import LocationOnIcon from '@mui/icons-material/LocationOn';
    import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import VisibilityIcon from '@mui/icons-material/Visibility';
    import Button from '../ui/button.jsx'
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
    import { Link } from "react-router-dom";
    export default function AboutMeSection() {
        return(
            <div className="text-white">
                <div className=" flex flex-col gap-5 mt-20  m-7 lg:flex-row">
                    <div className="flex justify-center"> 
                        <div><img className=" w-xs -mt-3" src={aboutMePic}></img></div>
                    </div>
                    <div>
                        <div>
                            <div className="text-3xl">Hi! My name is <br></br>Jomeo Renz Dela Cruz</div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <div><LocationOnIcon sx={{ fontSize: '1rem', mt: -0.5}}></LocationOnIcon> Philippines | Parañaque City</div>
                                <div><SchoolIcon sx={{ fontSize: '1rem', mt: -0.5 }}></SchoolIcon> BSIT 2022 - 2026 | Polytechnic University of the Philippines</div>
                            </div> 
                            <div className="md:max-w-md">
                                <div>I am a 22-year-old aspiring full-stack developer with familiarity on building web applications and I am strongly interested in branching out more in other areas of software development.</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-1.5 mt-5 lg:gap-2">
                                <div>
                                    <div><Button><VisibilityIcon></VisibilityIcon> My Resume</Button></div>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <Button onClick={ () => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jomeorenzdelacruz@gmail.com', '_blank')} borderRadius="circle">
                                        <div><AlternateEmailIcon></AlternateEmailIcon></div>
                                    </Button>
                                    <Button onClick={ () => window.open('https://www.linkedin.com/in/jomeorenzdelacruz/', '_blank')} borderRadius="circle">
                                        <div><LinkedInIcon></LinkedInIcon></div>
                                    </Button>
                                    <Button onClick={ () => window.open('https://github.com/jomnomz', '_blank')} borderRadius="circle">
                                        <div><GitHubIcon></GitHubIcon></div>
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <Link to="/aboutMe" >More about me <ArrowForwardIcon></ArrowForwardIcon></Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

