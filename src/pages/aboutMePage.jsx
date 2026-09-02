import NavBar from '../components/navBar.jsx'
import PageLayout from '../components/layouts/pageLayout.jsx'
import bagiou from '../assets/aboutMe/bagiuo.jpg'
import intramuros from '../assets/aboutMe/intramuros.jpg'
import binondo from '../assets/aboutMe/binondo.jpg'
import ramen from '../assets/aboutMe/ramen.jpg'
import museumdate from '../assets/aboutMe/museumdate.jpg'
import up from '../assets/aboutMe/up.jpg'
import aboutMePic1 from '../assets/aboutMe/aboutMePic1.webp'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '../components/ui/button.jsx'
export default function AboutMePage(){
    const resumeUrl = "/RESUME_26_Jomeo Renz Dela Cruz.pdf";

    return(
        <PageLayout>
            <NavBar></NavBar>
            <div className="text-text-primary mt-20 animate-fade-in-down">
                <div className="text-2xl mt-5">About Me</div>
                <div>Get to know me a bit better</div>
            </div>
            <div className="text-text-primary animate-fade-in-down">
                <div className=" flex flex-col gap-5 lg:flex-row">
                    <div className="flex justify-center"> 
                        <div><img className=" w-xs -mt-3 transition-transform duration-300 hover:scale-102" src={aboutMePic1}></img></div>
                    </div>
                    <div>
                        <div>
                            <div className="text-3xl">Hi there! Once again <br></br>I am Jomeo Renz Dela Cruz</div>
                        </div>
                        <div className="flex flex-col gap-3 mt-5">
                            <div className="lg:max-w-md flex flex-col gap-3">
                                <div>A 22-year-old aspiring full-stack developer. I just got done with my internship a few months ago and I'm now just waiting to graduate!</div>
                                <div>I have familiarity on building web applications and I am strongly interested in branching out more in other areas of software development.</div>
                                <div>Seeing something I’ve built being actively used by real people is what fuels my passion. I have a backlog of ideas waiting to be executed, and I'm excited to share them as they come.</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-1.5 mt-5 lg:gap-2">
                                <div>
                                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                        <Button><VisibilityIcon></VisibilityIcon> My Resume</Button>
                                    </a>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-text-primary p-5 mt-5 pl-0 animate-fade-in-down">
                <div className="text-2xl mt-5">Gallery</div>
                <div className="text-md mt-1">Through My Lens</div>
            </div>
            <div>
                <div className="grid mb-20 grid-cols-1 gap-3 lg:grid-cols-3 animate-fade-in-down">
                    <div className="flex flex-col gap-3">
                        <img loading="lazy" className="transition-transform duration-300 hover:scale-102" src={bagiou} />
                        <img loading="lazy" className="transition-transform duration-300 hover:scale-102" src={ramen} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <img loading="lazy" className="transition-transform duration-300 hover:scale-102" src={binondo} />
                        <img loading="lazy" className="transition-transform duration-300 hover:scale-102" src={intramuros} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <img loading="lazy" className="transition-transform duration-300 hover:scale-102" src={up} />
                        <img loading="lazy" className="transition-transform duration-300 hover:scale-102" src={museumdate} />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
