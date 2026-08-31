import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import ExperiencePage from './pages/experience/experiencePage.jsx'
import ProjectsPage from './pages/project/projectPage.jsx'
import ProjectDetail from './pages/project/projectDetail.jsx'
import TechStackPage from './pages/techStackPage.jsx'
import './App.css'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutMe" element={<ExperiencePage/>} />
      <Route path="/experience" element={<ExperiencePage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/projects/:id" element={<ProjectDetail/>} />
      <Route path="/techStack" element={<TechStackPage/>} />
    </Routes>
  )
}

export default App
