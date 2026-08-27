import nexvisionLogo from '../assets/nexvisionLogo.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '../../components/ui/stack.jsx'
import Button from '../../components/ui/button.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
                    <div class=" bg-white flex flex-row gap-5">
                        <div class=" ">
                            <div  class="flex flex-row gap-2">
                                <div>
                                    <div class="w-12 md:w-15"><img class="rounded-sm" src={nexvisionLogo}></img></div>
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex -mt-1">
                                        <div>Full Stack Developer Intern | NexVision Innovations Inc.</div>
                                    </div>
                                    <div class="flex flex-row  ">
                                        <div></div>
                                        <div>
                                            <div class="flex flex-row ">
                                                <div><LocationOnIcon sx={{ fontSize: '1rem', mt: -1 }}></LocationOnIcon></div>
                                                <div class="">Bonifacio Global City (BGC), Taguig City</div>
                                            </div>
                                            <div class="flex flex-row">
                                                <div><CalendarMonthIcon sx={{ fontSize: '1rem', mt: -0.5 }}></CalendarMonthIcon></div>
                                                <div class="">March 2026 – June 2026</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="max-w-lg -mt-1">
                                Built full-stack features—quiz engines, approval workflows, and telemetry integrations—for LMS, fleet, and logistics platforms.
                            </div>
                            <div class="flex flex-row flex-wrap gap-1">
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">React</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Nex.js</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Node.js</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Express.js</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Tailwind CSS</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Github</Stack>
                            </div>
                        </div>
                    </div>
                    
                    <div class=" bg-white flex flex-row gap-5">
                        <div class=" ">
                            <div  class="flex flex-row gap-2">
                                <div>
                                    <div class="w-12 md:w-15"><img class="rounded-sm" src={nexvisionLogo}></img></div>
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex -mt-1">
                                        <div>Full Stack Developer Intern | NexVision Innovations Inc.</div>
                                    </div>
                                    <div class="flex flex-row  ">
                                        <div></div>
                                        <div>
                                            <div class="flex flex-row ">
                                                <div><LocationOnIcon sx={{ fontSize: '1rem', mt: -1 }}></LocationOnIcon></div>
                                                <div class="">Bonifacio Global City (BGC), Taguig City</div>
                                            </div>
                                            <div class="flex flex-row">
                                                <div><CalendarMonthIcon sx={{ fontSize: '1rem', mt: -0.5 }}></CalendarMonthIcon></div>
                                                <div class="">March 2026 – June 2026</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="max-w-lg -mt-1">
                                Built full-stack features—quiz engines, approval workflows, and telemetry integrations—for LMS, fleet, and logistics platforms.
                            </div>
                            <div class="flex flex-row flex-wrap gap-1">
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">React</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Nex.js</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Node.js</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Express.js</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Tailwind CSS</Stack>
                                <Stack backgroundColor="#639FA0" color="white" size="wOIcon" fontSize="0.8rem">Github</Stack>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}