import { useParams, Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import NavBar from '../../components/navBar.jsx'
import PageLayout from '../../components/layouts/pageLayout.jsx'
import Carousel from '../../components/carousel.jsx'
import StackList from "../../components/ui/stackList.jsx";
import NotFound from '../notFound.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
export default function ProjectDetail(){
    const { id } = useParams();
    const project = projectsData.find(project => project.id === id)

    if(!project){
        return(
            <NotFound></NotFound>
        )
    }

    return(
    <PageLayout>
        <NavBar></NavBar>
        <div className="animate-fade-in-down text-text-primary p-5 mt-20 lg:p-2 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row gap-2 justify-between">
                    <div className="flex flex-row  items-center gap-3 mt-5">
                        <div>
                            <div className=""><img className="w-14 rounded-sm  " src={project.projectLogo}></img></div>
                        </div>
                        <div>
                            <div className="text-3xl">{project.projectName}</div>
                            <div className="text-md ">{project.projectType}</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-end shrink-0">
                        <button onClick={ () => window.open(project.projectLink, '_blank')} className="transition-transform duration-300 hover:scale-105 border p-1 px-2 rounded-sm whitespace-nowrap">
                            <div className="flex justify-center items-center flex-row gap-1">
                                <LanguageIcon sx={{ fontSize: '1.2rem' }} />
                                Check Site
                            </div>
                        </button>
                        <button onClick={ () => window.open(project.projectGithubLink, '_blank')} className="transition-transform duration-300 hover:scale-105 border p-1 px-2 rounded-sm whitespace-nowrap">
                            <div className="flex justify-center items-center gap-1">
                                <GitHubIcon sx={{ fontSize: '1.2rem' }} />
                                View Code
                            </div>
                        </button>
                    </div>
                </div>
                <div className="text-lg">{project.projectDescriptionFull}</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div className="flex flex-col gap-3">
                    <div>
                        <Carousel images={project.projectImages}></Carousel>
                    </div>
                    <StackList techStack={project.projectTechStack}></StackList>
                </div>
                <div>
                    <ul className="list-disc flex flex-col gap-3">
                        {project.projectBullets.map((bullet, index)  => (
                            <li key={index}>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-5 flex flex-col gap-3">
                        <div>Achievements</div>
                        <ul>
                            <li>{project.projectAchievements}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
    )
}