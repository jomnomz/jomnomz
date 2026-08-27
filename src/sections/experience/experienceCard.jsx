import Stack from '../../components/ui/stack.jsx'
import StackList from '../../components/ui/stackList.jsx'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function ExperienceCard({name, place, duration, experienceDescription, techStack, experienceLogo}){
    return(
        <div className="group" >
            <div class=" flex flex-row gap-5">
                <div class=" ">
                    <div  class="flex flex-row gap-2">
                        <div>
                            <div class="w-12 md:w-15 group-hover: scale-110"><img class="rounded-sm" src={experienceLogo}></img></div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex -mt-1">
                                <div>{name}</div>
                            </div>
                            <div class="flex flex-row  ">
                                <div></div>
                                <div>
                                    <div class="flex flex-row ">
                                        <div><LocationOnIcon sx={{ fontSize: '1rem', mt:-0.5 }}></LocationOnIcon></div>
                                        <div class="">{place}</div>
                                    </div>
                                    <div class="flex flex-row">
                                        <div><CalendarMonthIcon sx={{ fontSize: '1rem', mt:-0.5 }}></CalendarMonthIcon></div>
                                        <div class="">{duration}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="max-w-lg -mt-1">
                        {experienceDescription}
                    </div>
                    <StackList techStack={techStack} />
                </div>
            </div>
        </div>
    )
}