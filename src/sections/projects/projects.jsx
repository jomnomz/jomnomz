import scanpassLogin from '../../assets/scanpassLogin.png'
import scanpassLogo from '../../assets/scanpassLogo.png'
import Button from '../../components/ui/button.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from './projectCard.jsx'
export default function Projects() {
    return (
        <div className="md:mx-45">
            <div class="flex flex-rpw justify-between">
                <div class="text-3xl ml-6">Projects</div>
                <div class="mr-5">
                    <div><Button border="borderLess">All Projects <ArrowForwardIcon></ArrowForwardIcon></Button></div>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center m-7">
                <div className="flex flex-col gap-5 md:flex-row">

                    <ProjectCard 
                        projectThumbnail={scanpassLogin}
                        projectLogo={scanpassLogo}
                        projectName="ScanPass" 
                        projectType="QR Code-Based Attendance Tracking System" 
                        projectDescription="ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see student time-in/time-out..."
                        techStack={[
                            {name: "React", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "React", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Nex.js", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Express.js", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Supabase", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Vercel", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Render", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                        ]}
                    />

                    <ProjectCard 
                        projectThumbnail={scanpassLogin}
                        projectLogo={scanpassLogo}
                        projectName="ScanPass" 
                        projectType="QR Code-Based Attendance Tracking System" 
                        projectDescription="ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see student time-in/time-out..."
                        techStack={[
                            {name: "React", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "React", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Nex.js", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Express.js", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Supabase", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Vercel", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                            {name: "Render", color: "white", backgroundColor: "#1A2236", size: "wOIcon", fontSize: "0.8rem"},
                        ]}
                    />

                </div>
            </div>
        </div>
    )
}