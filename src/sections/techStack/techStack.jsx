import Stack from '../../components/ui/stack.jsx'
import html from  '../../assets/html.png'
import Button from '../../components/ui/button.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TechStackCard from '../techStack/techStackCard.jsx'
export default function TechStack(){
    return(
        <div class=" md:mx-45 ">
            <div class="flex flex-rpw justify-between">
                <div class="text-3xl ml-6">Tech Stack</div>
                <div class="mr-5">
                    <div><Button border="borderLess">Complete Stack <ArrowForwardIcon></ArrowForwardIcon></Button></div>
                </div>
            </div>
            <div class="flex flex-col gap-5 justify-center items-center m-7">
                <div class="flex flex-col md:flex-row gap-5">

                    <TechStackCard 
                        techStackType="Front End"
                        techStack={[
                            {name:"HTML", backgroundColor:"black", color:"white", logo: html},
                            {name:"Tailwind CSS", backgroundColor:"black", color:"white", logo: html},
                            {name:"JavaScript", backgroundColor:"black", color:"white", logo: html},
                            {name:"TypeScript", backgroundColor:"black", color:"white", logo: html},
                            {name:"React", backgroundColor:"black", color:"white", logo: html},
                            {name:"Vite", backgroundColor:"black", color:"white", logo: html},
                        ]}
                    />

                    <TechStackCard 
                        techStackType="Back End"
                        techStack={[
                            {name:"Express.js", backgroundColor:"black", color:"white", logo: html},
                            {name:"Node.js", backgroundColor:"black", color:"white", logo: html},
                            {name:"PosgreSQL", backgroundColor:"black", color:"white", logo: html},
                            {name:"REST API", backgroundColor:"black", color:"white", logo: html},
                            {name:"Supabase", backgroundColor:"black", color:"white", logo: html},
                        ]}
                    />
                    
                </div>
            </div>
        </div>
    )
}