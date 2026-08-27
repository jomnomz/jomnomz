import nexvisionLogo from '../../assets/nexvisionLogo.png'
import Button from '../../components/ui/button.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExperienceCard from './experienceCard.jsx'
export default function Experience(){
    return(
        <div class=" md:mx-45 ">
            <div class="flex flex-rpw justify-between">
                <div class="text-3xl ml-6">Experience</div>
                <div class="mr-5">
                    <div><Button border="borderLess">View History <ArrowForwardIcon></ArrowForwardIcon></Button></div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-5 m-7 ">
                    <div class="flex flex-col border rounded-sm p-2 md:w-full md:p-9 gap-8">

                    <ExperienceCard
                        experienceLogo={nexvisionLogo}
                        name="Full Stack Developer Intern | NexVision Innovations Inc."
                        place="Bonifacio Global City (BGC), Taguig City"
                        duration="March 2026 – June 2026"
                        experienceDescription="Built full-stack features—quiz engines, approval workflows, and telemetry integrations—for LMS, fleet, and logistics platforms."
                        techStack={[
                            {name:"React", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Nex.js", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Node.js", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Express.js", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Tailwind CSS", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Github", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                        ]}
                    />
                    
                    {/* <ExperienceCard
                        experienceLogo={nexvisionLogo}
                        name="Full Stack Developer Intern | NexVision Innovations Inc."
                        place="Bonifacio Global City (BGC), Taguig City"
                        duration="March 2026 – June 2026"
                        experienceDescription="Built full-stack features—quiz engines, approval workflows, and telemetry integrations—for LMS, fleet, and logistics platforms."
                        techStack={[
                            {name:"React", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Nex.js", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Node.js", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Express.js", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Tailwind CSS", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                            {name:"Github", backgroundColor:"#639FA0", color:"white", size:"wOIcon", fontSize:"0.8rem"},
                        ]}
                    /> */}


                </div>
            </div>
        </div>
    )
}