import Snowfall from 'react-snowfall'
import HomePage from './components/HomePage/home'
import Navbar from './components/navbar/navbar.jsx'
import AboutUs from './components/AboutUs/about.jsx'
import Project from './components/ProjectPage/project.jsx'
import Skill from './components/SkillPage/skill.jsx'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Snowfall style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 0 }} snowflakeCount={100} color='rgba(255,255,255,0.7)'/>
      <Navbar />
      <HomePage />
      <AboutUs />
      <Project />
      <Skill />
    </div>
  )
}

export default App
