import NavBar from '../components/navBar.jsx'
import PageLayout from '../components/layouts/pageLayout.jsx'
import TechStack from '../components/techStack.jsx'
export default function TechStackPage(){
    return(
        <PageLayout>
            <NavBar></NavBar>
            <div className="text-white p-5 mt-20 lg:p-2">
                <div className="text-2xl mt-5">Complete TechStack</div>
            </div>
            <TechStack page="techStackPage"/>
        </PageLayout>
    )
}