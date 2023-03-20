import React from 'react'

function AchievmentCard() {
  return (
    <div className='m-3 border-2 border-tint justify-center text-white '>
        <div className='m-5'>
            <div className='flex mt-6'>
             <h1 className='text-1xl mr-4 text-tint'> Name of the Event</h1>|<h2 className='text-1xl ml-2 '>3rd Place</h2>
             </div>
            <div className=' text-lg mt-4 w-2/3'>
            Project descriptions provide the following details to the applicants: the whatever.
            </div>
            <a className='text-tint text-sm mt-3'>view details</a>
        </div>
    </div>
  )
}

export default AchievmentCard