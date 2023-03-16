import React from 'react'

function Home() {
  return (
    <div className='dark:bg-black text-6xl lg:mt-48 text-white'>
      <div  className='ml-52'>
        Hello,
      </div>
        <div className='ml-52 mt-4'>
        I am <span className='text-tint ml-2'>Kedar,</span>
        </div>
        <div className='m-52 mt-4'>
        Full Stack Developer
        <br />
        <button className="mt-4 border-2 border-tint text-tint text-lg">
            <p className='m-4'>Know more about me!</p>
        </button>
        </div>
    </div>
  )
}

export default Home