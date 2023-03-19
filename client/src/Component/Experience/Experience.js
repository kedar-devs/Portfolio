import React from 'react'
import ExperienceCard from '../Card/ExperienceCard'
function Experience() {
  return (
    <div>
        <h1 className='mt-10 ml-24 text-white text-3xl'>
            My Journey
        </h1>
        <div className='mt-16 grid grid-cols-1'>
            <div className=' mx-24'>
                <ExperienceCard />
            </div>
        </div>
    </div>
  )
}

export default Experience