import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TechStack from '../techStack.jsx'
export default function TechStackSection(){
    return(
        <div className="text-white">
            <div className=" flex flex-row justify-between items-center">
                <div className="text-3xl ml-6">Tech Stack</div>
                <div className="flex flex-row justify-center items-center mr-6">
                    <Link to="/techStack" >Complete Stack <ArrowForwardIcon></ArrowForwardIcon></Link >
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center m-7">
                <TechStack/>
            </div>
        </div>
    )
}