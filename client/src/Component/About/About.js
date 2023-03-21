import React from 'react'
import Achievment from '../Achievment/Achievment'
import AboutCard from '../Card/AboutCard'
function About() {
  return (
    <div>
      <div className='m-4 mt-10'>
        <AboutCard />
      </div>
        <div className='mt-20 m-4'>
        <Achievment />
        </div>
    </div>
  )
}

export default About