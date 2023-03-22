import React from 'react'
import Achievment from '../Achievment/Achievment'
import AboutCard from '../Card/AboutCard'
import Skill from '../Skills/Skill'
function About() {
  return (
    <div>
      <div className='m-4 mt-10 min-h-full'>
        <AboutCard />
      </div>
      <div className='mt-20 m-4'>
        <Skill />
      </div>
        <div className='mt-20 m-4'>
        <Achievment />
        </div>
    </div>
  )
}

export default About