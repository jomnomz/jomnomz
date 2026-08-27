import NavBar from './components/navBar.jsx'
import AboutMe from './sections/aboutMe.jsx'
import Experience from './sections/experience.jsx'
import Projects from './sections/projects/projects.jsx'
import TechStack from './sections/techStack.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return(
    <>
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects>
      <TechStack></TechStack>
    </>
  )
}

export default App
