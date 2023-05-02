import React from 'react'
import Achievment from '../Achievment/Achievment'
import AboutCard from '../Card/AboutCard'
import Skill from '../Skills/Skill'
function About() {
  return (
    <div>
      <div className='lg:m-4 mt-10 min-h-full m-2 lg:ml-0 ml-10 w-4/5 lg:w-full'>
        <AboutCard />
      </div>
      <div className='lg:m-4 lg:mt-20 mt-10'>
        <Skill />
      </div>
        <div className='lg:mt-20 lg:p-4 mt-10'>
        <Achievment />
        </div>
    </div>
  )
}

export default About