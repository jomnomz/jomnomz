import StackList from './ui/stackList.jsx'
import { techStackData } from '../data/techStackData.js'
import { Link } from "react-router-dom";

const pageMap = {
    techStackPage: {
        techStackContainer: "lg:grid-cols-1"
    },
    homePage: {
        techStackContainer: "lg:grid-cols-2"
    }
}
export default function TechStack({page = "homePage"}){
    const styles = pageMap[page] || {}; 
    
    return(
        <div className={`animate-fade-in-down grid grid-cols-1 gap-5 ${styles?.techStackContainer || ""}`}>
            {techStackData?.map((techStack) => (
                <Link key={techStack.id} to={`/techStack`}>
                    <div className="text-white flex flex-col border rounded-sm gap-3 p-5 max-w-1xl">
                        <div className="text-xl">{techStack.techStackType}</div>
                        <StackList techStack={techStack.techStack}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}