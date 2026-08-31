import NavBar from '../components/navBar.jsx'
import PageLayout from '../components/layouts/pageLayout.jsx'
import AboutMeSection from '../components/sections/aboutMeSection.jsx'
import Experience from '../components/sections/experience/experienceSection.jsx'
import ProjectsSection from '../components/sections/projectsSection.jsx'
import TechStackSection from '../components/sections/techStackSection.jsx'

export default function Home() {
  return(
    <PageLayout>
      <NavBar></NavBar>
      <AboutMeSection></AboutMeSection>
      <Experience></Experience>
      <ProjectsSection></ProjectsSection>
      <TechStackSection></TechStackSection>
    </PageLayout>
  )
}