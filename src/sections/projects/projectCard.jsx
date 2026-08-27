import StackList from '../../components/ui/stackList.jsx'

export default function ProjectCard({projectName,projectDescription, projectType, projectThumbnail,projectLogo,techStack  }) {
    return(
        <div className="group">
            <div className="bg-gray-800 flex justify-center items-center p-2 rounded-tl-lg rounded-tr-lg md:py-9">
                <div className="w-xs md:w-sm">
                    <img
                        className="rounded-sm transition-transform duration-300 group-hover:scale-110"
                        src={projectThumbnail}
                        alt="projectThumnail"
                    />
                </div>
            </div>
            <div className="flex flex-col border rounded-bl-lg rounded-br-lg p-2 md:p-5">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3">
                        <div>
                            <div className="w-12">
                                <img src={projectLogo} alt="projectLogo" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start -mt-1">
                            <div className="text-lg">{projectName}</div>
                            <div>{projectType}</div>
                        </div>
                    </div>
                    <div className="md:max-w-lg">
                        <div>{projectDescription}</div>
                    </div>
                    <StackList techStack={techStack} />
                </div> 
            </div>
        </div>
    )
}