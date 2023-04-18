import React from 'react'
import SkillsCard from '../Card/SkillsCard'
function Skill() {
  return (
    <div className=' h-72 lg:grid lg:grid-cols-3 grid grid-cols-1'>
        <div className=' lg:border-r-4 border-tint'>
                <h1 className='lg:text-3xl text-5xl lg:text-end mr-10 text-tint capitalize text-center'><span className='text-5xl font-extrabold'>S</span>kills</h1>
        </div>
    <div className='lg:col-span-2 lg:m-5 mt-24'>
        <SkillsCard />
    </div>
    </div>
  )
}

export default Skill