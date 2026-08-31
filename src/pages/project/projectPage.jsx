import NavBar from '../../components/navBar.jsx'
import PageLayout from '../../components/layouts/pageLayout.jsx'
import Projects from '../../components/projects.jsx'
export default function ProjectsPage(){
    return(
        <PageLayout>
            <NavBar></NavBar>
            <div className="text-white p-5 mt-20 lg:p-2">
                <div className="text-2xl mt-5">All Projects</div>
            </div>
            <Projects page="projectsPage"/>
        </PageLayout>
    )
}