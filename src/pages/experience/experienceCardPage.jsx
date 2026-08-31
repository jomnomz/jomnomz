import StackList from '../../components/ui/stackList.jsx'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import { experienceData } from '../../data/experienceData.js'
import { Link } from "react-router-dom";
export default function experienecCardPage(){
    return(
        <div>
            {experienceData?.map ((experience) => (
                <Link key={experience.id} to={`/experience/${experience.id}`}>
                    <div className="group" >
                        <div className="text-white justify-start items-start p-5 lg:p-2 rounded-sm flex flex-col gap-4">
                            <div className="">
                                <div  className="flex flex-row gap-2">
                                    <div className="">
                                        <div className="w-20 lg:w-16"><img className="rounded-sm" src={experience.experienceLogo}></img></div>
                                    </div>
                                    <div className="flex flex-col -mt-0.5">
                                        <div className="flex text-xl">
                                            <div>{experience.experienceName}</div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:gap-5  ">
                                                <div className="text-sm flex flex-col  ">
                                                    <div className="flex flex-row gap-1">
                                                        <div><PersonIcon sx={{ fontSize: '1rem', mt:-0.5 }}></PersonIcon></div>
                                                        <div className="">{experience.jobRole}</div>
                                                    </div>
                                                    <div className="flex flex-row gap-1">
                                                        <div><WorkIcon sx={{ fontSize: '1rem', mt:-0.5 }}></WorkIcon></div>
                                                        <div className="">{experience.jobType}</div>
                                                    </div>
                                                </div>
                                                <div className="text-sm flex flex-col">
                                                    <div className=" flex flex-row  gap-1">
                                                        <div><LocationOnIcon sx={{ fontSize: '1rem', mt:-0.5 }}></LocationOnIcon></div>
                                                        <div className="">{experience.experiencePlace}</div>
                                                    </div>
                                                    <div className="flex flex-row gap-1">
                                                        <div><CalendarMonthIcon sx={{ fontSize: '1rem', mt:-0.5 }}></CalendarMonthIcon></div>
                                                        <div className="">{experience.experienceDate}</div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-20 flex flex-col gap-2">
                                <div className="max-w-6xl ml-7 lg:ml-3  -mt-1.5">
                                    <ul className="list-disc">
                                        {experience.experienceBullets.map((bullet, index) => (
                                            <li key={index}>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
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