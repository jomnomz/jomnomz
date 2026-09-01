import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import AboutMePage from './pages/aboutMePage.jsx'
import ExperiencePage from './pages/experience/experiencePage.jsx'
import ProjectsPage from './pages/project/projectPage.jsx'
import ProjectDetail from './pages/project/projectDetail.jsx'
import TechStackPage from './pages/techStackPage.jsx'
import NotFound from './pages/notFound.jsx'
import './App.css'
import ScrollToTop from "./components/scrollToTop";
function App() {
  return(
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutMe" element={<AboutMePage/>} />
      <Route path="/experience" element={<ExperiencePage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/projects/:id" element={<ProjectDetail/>} />
      <Route path="/techStack" element={<TechStackPage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
