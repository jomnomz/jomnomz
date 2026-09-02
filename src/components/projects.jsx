import { Link } from "react-router-dom";
import { projectsData } from '../data/projectsData.js'
import StackList from './ui/stackList.jsx'

const pageMap = {
    projectsPage: {
        projectContainer: "lg:grid-cols-3",
        projectThumbnail: "",
        projectName: " text-sm",
        projectType: "text-xs",
        projectThumbnailContainer: "lg:py-3 p-3",
        projectDescription: "text-sm",
        projects: "transition-transform duration-300 group-hover:scale-103"
    },
    homePage: {
        projectContainer: "lg:grid-cols-2",
        projectThumbnail: "transition-transform duration-300 group-hover:scale-110",
        projectName: "text-sm lg:text-lg",
        projectType: "text-xs lg:text-base",
        projectThumbnailContainer: "lg:py-9 p-2",
        projectDescription: "text-sm lg:text-md",
        projects: ""
    }
}
export default function Projects({page = "homePage"}){
    const styles = pageMap[page] || {}; 

    return(
        <div className= {`animate-fade-in-down text-text-primary grid grid-cols-1 gap-5 justify-center m-7 ${styles?.projectContainer || ""}`}>

            {projectsData?.map ((projects) => (
                <Link key={projects.id} to={`/projects/${projects.id}`}>
                    <div className="group">
                        <div className={` ${styles?.projects || ""}`}>
                            <div className={` border-t border-x border-b-0 text-text-primary flex justify-center items-center rounded-tl-lg rounded-tr-lg ${styles?.projectThumbnailContainer || ""}`}>
                                <div className="w-full max-w-auto lg:max-w-sm">
                                    <img
                                    l   loading="lazy"
                                        className={`rounded-sm ${styles?.projectThumbnail || ""}`}
                                        src={projects.projectImages[0]}
                                        alt="projectThumnail"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-col border rounded-bl-lg rounded-br-lg p-2 lg:p-5">
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-row gap-3">
                                        <div>
                                            <div className="w-12">
                                                <img loading="lazy" src={projects.projectLogo} alt="projectLogo" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-start -mt-1">
                                            <div className={`${styles?.projectName || ""}`}>{projects.projectName}</div>
                                            <div className={`${styles?.projectType || ""}`}>{projects.projectType}</div>
                                        </div>
                                    </div>
                                    <div className="lg:max-w-lg">
                                        <div className={`${styles?.projectDescription || ""}`}>{projects.projectDescription}</div>
                                    </div>
                                    <StackList techStack={projects.projectTechStack} />
                                </div> 
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    )
}