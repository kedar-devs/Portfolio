import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Project from '../Project/Project'
import About from '../About/About'
import Experience from '../Experience/Experience'
import IndivisualProject from '../Project/IndivisualProject'

function AppRoute() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Project' element={<Project />} />
            <Route exact path='/Project/:id' element={<IndivisualProject />} />
            <Route exact path='/Experience' element={<Experience />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoute