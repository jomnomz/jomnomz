
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExperienceCardSection from './experienceCardSection.jsx'
export default function Experience(){
    return(
        <div className="text-white animate-fade-in-down">
            <div className="flex flex-row justify-between items-center">
                <div className="text-3xl ml-6">Experience</div>
                <div className="flex flex-row justify-center items-center mr-6">
                    <Link to="/experience" >Full History <ArrowForwardIcon></ArrowForwardIcon></Link >
                </div>
            </div>
            <div className="flex flex-col justify-center gap-5 m-7 ">
                <div className=" flex flex-col border rounded-sm p-2 lg:w-full lg:p-9 gap-8">
                    <ExperienceCardSection/>
                </div>
            </div>
        </div>
    )
}