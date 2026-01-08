import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage/home'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
