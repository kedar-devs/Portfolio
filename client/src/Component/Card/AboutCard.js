import React from 'react'
import insta from './../../assets/insta.png'
import linkedIn from './../../assets/linkedIn.png'
import Twitter from './../../assets/Twitter.png'
import Gmail from './../../assets/Gmail.png'
import './projectcard.css'
function AboutCard() {
  return (
    <div className='grid grid-cols-4 bgAbout text-white'>
        <div className='ml-24'>
            <img src='https://images.unsplash.com/photo-1679217121503-264c00693d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='my profile' className=' h-64'/>
        </div>
        <div className=' col-span-3 text-black mt-10'>
            <div className='grid grid-cols-3 p-4'>
              <div>
                <h1 className=' uppercase text-4xl  w-2/3 font-extrabold'>Kedar Devasthali</h1>
              </div>
              <div className=' font-semibold border-l-8 border-black text-lg'>
                <div className='ml-4'>
                Backend Developer<br/>
                Associate Software Engineer @ivp<br />
                C#, react, Sql
                </div>
              </div>
            </div>
            <div className='w-2/3 mt-14 text-white'>
            Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, as well as a project plan that de. 
            </div>
            <div className='flex'>
              <img src={Twitter}  className='m-2'/>
              <img src={Gmail} className='m-2'/>
              <img src={linkedIn} className='m-2'/>
              <img src={insta} className='m-2'/>
            </div>
        </div>
        
    </div>
  )
}

export default AboutCard