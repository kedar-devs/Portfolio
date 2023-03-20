import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Project from '../Project/Project'
import About from '../About/About'
import Experience from '../Experience/Experience'

function AppRoute() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Experience' element={<Experience />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoute