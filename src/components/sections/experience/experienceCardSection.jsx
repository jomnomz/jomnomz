import StackList from '../../ui/stackList.jsx'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { experienceData } from '../../../data/experienceData.js'
import { Link } from "react-router-dom";

export default function ExperienceCardSection(){
    return(
        <div>
            {experienceData?.map((experience) => (
                <Link key={experience.id} to={`/experience`}>
                    <div className="group">
                        <div className=" group-hover:scale-103 transition-transform duration-300 p-2 rounded-sm flex flex-row justify-between">
                            <div className="">
                                <div className="flex flex-row gap-2">
                                    <div>
                                        <div className="w-12 lg:w-15">
                                            <img className="rounded-sm" src={experience.experienceLogo} alt="Experience logo" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex -mt-1.5">
                                            <div>{experience.experienceNameThumbnail}</div>
                                        </div>
                                        <div className="flex flex-row">
                                            <div>
                                                <div className="flex flex-row">
                                                    <div>
                                                        <LocationOnIcon sx={{ fontSize: '1rem', mt: -0.5 }} />
                                                    </div>
                                                    <div className="">{experience.experiencePlace}</div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div>
                                                        <CalendarMonthIcon sx={{ fontSize: '1rem', mt: -0.5 }} />
                                                    </div>
                                                    <div className="">{experience.experienceDate}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex flex-col lg:gap-0.5">
                                <div className="max-w-md -mt-1.5">
                                    {experience.experienceDescription}
                                </div>
                                <StackList techStack={experience.experienceTechStack} />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}