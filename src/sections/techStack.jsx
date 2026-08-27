import Stack from '../components/ui/stack.jsx'
import html from  '../assets/html.png'
import Button from '../components/ui/button.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function TechStack(){
    return(
        <div class=" md:mx-45 ">
            <div class="flex flex-rpw justify-between">
                <div class="text-3xl ml-6">Projects</div>
                <div class="mr-5">
                    <div><Button border="borderLess">Complete Stack <ArrowForwardIcon></ArrowForwardIcon></Button></div>
                </div>
            </div>
            <div class="flex flex-col gap-5 justify-center items-center m-7">
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="flex flex-col border rounded-sm p-2 gap-3">
                        <div>Front End</div>
                        <div class="flex flex-row flex-wrap gap-1">
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">HTML</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">Tailwind CSS</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">JavaScrpt</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">TypeScript</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">React</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">Vite</Stack>
                        </div>
                    </div>
                    <div class="flex flex-col border rounded-sm p-2 gap-3">
                        <div>Back End</div>
                        <div class="flex flex-row flex-wrap gap-1">
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">Express.js</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">Node.js</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">PostgresSQL</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">REST API</Stack>
                            <Stack img={<img src={html}/>} backgroundColor="black" color="white" size="wIcon">Supabase</Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}