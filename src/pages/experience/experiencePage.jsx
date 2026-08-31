import ExperienceCardPage from './experienceCardPage.jsx'
import NavBar from '../../components/navBar.jsx'
import PageLayout from '../../components/layouts/pageLayout.jsx'
export default function ExperiencePage(){
    return(
        <PageLayout>
            <NavBar></NavBar>
            <div className="text-white p-5 mt-20 lg:p-2">
                <div className="text-2xl mt-5">My Experience</div>
                <div>Full History</div>
            </div>
            
            <ExperienceCardPage/>
        </PageLayout>
    )
}