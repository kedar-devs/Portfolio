import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

function AppRoute() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoute