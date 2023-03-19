import React from 'react'
import home from './../../assets/Home.png'

function Home() {
  return (
    <div className=" text-6xl  text-white h-screen" style={{background:`url(${home})`}}>
      
      <div  className='ml-52 mt-48'>
        Hello,
      
      </div>
        <div className='ml-52 mt-6'>
        I am <span className='text-tint ml-2'>Kedar,</span>
        </div>
        <div className='m-52 mt-6'>
        Full Stack Developer
        <br />
        <button className="mt-6 border-2 border-tint text-tint text-lg">
            <p className='m-6'>Know more about me!</p>
        </button>
        </div>
        </div>

  )
}

export default Home