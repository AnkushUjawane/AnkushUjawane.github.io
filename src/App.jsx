import Snowfall from 'react-snowfall'
import HomePage from './components/HomePage/home'
import Navbar from './components/navbar/navbar.jsx'
import AboutUs from './components/AboutUs/about.jsx'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Snowfall style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: -1 }} snowflakeCount={300} />
      <Navbar />
      <HomePage />
      <AboutUs />
    </div>
  )
}

export default App
