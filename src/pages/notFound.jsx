import PageLayout from '../components/layouts/pageLayout.jsx'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Link } from "react-router-dom";
export default function NotFound(){
    return(
        <PageLayout>
            <div className="text-white h-dvh flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-2xl lg:text-3xl">We dont have that here</div>
                    <div className="text-2xl lg:text-3xl">Lets go back</div>
                </div>
                <div>
                    <Link to="/" className=""><MeetingRoomIcon sx={{ fontSize: 80 }} style={{ color: 'white' }}></MeetingRoomIcon></Link>
                </div>
                <div>
                    <div>before they come...</div>
                </div>
            </div>
        </PageLayout>
    )
}