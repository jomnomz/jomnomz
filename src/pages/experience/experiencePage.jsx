import ExperienceCardPage from './experienceCardPage.jsx'
import NavBar from '../../components/navBar.jsx'
import PageLayout from '../../components/layouts/pageLayout.jsx'
export default function ExperiencePage(){
    return(
        <PageLayout>
            <NavBar></NavBar>
            <div className="text-white mt-20 animate-fade-in-down">
                <div className="text-2xl mt-5">My Experience</div>
                <div>Full History</div>
            </div>
            
            <ExperienceCardPage/>
        </PageLayout>
    )
}