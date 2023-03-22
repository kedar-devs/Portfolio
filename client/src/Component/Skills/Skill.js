import React from 'react'
import SkillsCard from '../Card/SkillsCard'
function Skill() {
  return (
    <div className=' h-72 grid grid-cols-3'>
        <div className=' border-r-4 border-tint'>
                <h1 className='text-3xl text-end mr-10 text-tint capitalize'><span className='text-5xl font-extrabold'>S</span>kills</h1>
        </div>
    <div className='col-span-2 m-5 mt-24'>
        <SkillsCard />
    </div>
    </div>
  )
}

export default Skill