import { useParams, Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import NavBar from '../../components/navBar.jsx'
import PageLayout from '../../components/layouts/pageLayout.jsx'
import Carousel from '../../components/carousel.jsx'
import StackList from "../../components/ui/stackList.jsx";
export default function ProjectDetail(){
    const { id } = useParams();
    const project = projectsData.find(project => project.id === id)

    if(!project){
        return(
            <div>
                Project not found
            </div>
        )
    }

    return(
    <PageLayout>
        <NavBar></NavBar>
        <div className="text-white p-5 mt-20 lg:p-2 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <div className="text-3xl mt-5">{project.projectName}</div>
                    <div className="text-md ">{project.projectType}</div>
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