import React from 'react'
import {ReactComponent as ReactLogo} from './../../assets/React.svg'
import {ReactComponent as Node} from './../../assets/NodeJs.svg'
import {ReactComponent as Mongo} from './../../assets/Mongo.svg'
import './projectcard.css'

function ProjectCard() {
  return (
    <div className='flex flex-col border-2 border-tint'>
        <div className='grid grid-cols-3'>
            <div className='imageBackground flex h-80 col-span-1 '>
                <img src='https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='h-60 w-60 mt-10 ml-12' />
            </div>
            <div className='justify-center text-white col-span-2' >
                <h1 className=' capitalize text-tint text-5xl mt-9'>
                    THE PROJECT
                </h1>
                <div className='mt-6'>
            Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, with what all development has been done and a list of feature that makes the app market ready               
            </div>
            <br />
            <div className='flex mt-6'>
                <p className='m-4'><ReactLogo /></p> <p className='m-4'><Node /></p> <p className='m-4'><Mongo /></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard