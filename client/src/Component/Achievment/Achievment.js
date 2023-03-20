import React from 'react'
import AchievmentCard from '../Card/AchievmentCard'
function Achievment() {
  return (
    <div className=' h-72 grid grid-cols-3'>
        <div className=' border-r-4 border-tint'>
                <h1 className='text-3xl text-end mr-10 text-tint capitalize'><span className='text-5xl font-extrabold'>A</span>chievements</h1>
        </div>
    <div className='col-span-2 m-5'>
    <AchievmentCard />
    </div>
    </div>
  )
}

export default Achievment