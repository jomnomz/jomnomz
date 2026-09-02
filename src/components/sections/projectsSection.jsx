import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Projects from '../projects.jsx'

export default function ProjectsSection() {
    return (
        <div className="text-text-primary animate-fade-in-down">
            <div className=" flex flex-row justify-between items-center">
                <div className="text-3xl ml-6">Projects</div>
                <div>
                    <Link to="/projects" className="flex justify-between items-center mr-6">All Projects <ArrowForwardIcon></ArrowForwardIcon></Link >
                </div>
            </div>
            <Projects/>
        </div>

    )
}