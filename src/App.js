import React from 'react'
import Navbar from './components/Navbar'
import AddConfession from './components/AddConfession'
import ConfessionLists from './components/ConfessionLists'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './assests/css/App.css'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </Router>

  )
}

export default App