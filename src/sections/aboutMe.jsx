    import myPic from '../assets/myPic.png'
    import SchoolIcon from '@mui/icons-material/School';
    import LocationOnIcon from '@mui/icons-material/LocationOn';
    import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import VisibilityIcon from '@mui/icons-material/Visibility';
    import Button from '../components/ui/button.jsx'
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
    export default function AboutMe() {
        return(
            <div class=" md:mx-50 mt-20">
                <div className="flex flex-col gap-5  m-7 md:flex-row">
                    <div class="flex justify-center"> 
                        <div><img class="w-xs" src={myPic}></img></div>
                    </div>
                    <div>
                        <div>
                            <div class="text-3xl">Hi! My name is <br></br>Jomeo Renz Dela Cruz</div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <div>
                                <div><LocationOnIcon sx={{ fontSize: '1rem', mt: -0.5}}></LocationOnIcon> Philippines | Paranaque City</div>
                                <div><SchoolIcon sx={{ fontSize: '1rem', mt: -0.5 }}></SchoolIcon> BSIT 2022 - 2026 | Polytechnic University of the Philippines</div>
                            </div> 
                            <div class="md:max-w-md">
                                <div>I am a 21-year-old aspiring full-stack developer with familiarity on building web applications and I am strongly interested in branching out more in other areas of software development.</div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-row gap-2 mt-5">
                                <div>
                                    <div><Button><VisibilityIcon></VisibilityIcon> My Resume</Button></div>
                                </div>
                                <div class="flex flex-row gap-1">
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
                                <div><Button border="borderLess">More about me <ArrowForwardIcon></ArrowForwardIcon></Button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

