import React,{useEffect,useState} from 'react'
import {ReactComponent as ReactLogo} from './../../assets/React.svg'
import {ReactComponent as Node} from './../../assets/NodeJs.svg'
import {ReactComponent as Mongo} from './../../assets/Mongo.svg'
import ProjectImg from './../../assets/Project.png'
import './projectcard.css'

function ProjectCard(props) {
    console.log(props)
    const [Details,setDetails]=useState(props.data)
    useEffect(()=>{
        console.log(props)
        setDetails(props.data)
    },[props])
  return (
    <div className='flex flex-col border-2 border-tint'>
        <div className='grid grid-cols-3'>
            <div className='imageBackground flex h-80 col-span-1 '>
                <img src={ProjectImg} className='h-60 w-60 mt-10 ml-12' />
            </div>
            <div className='justify-center text-white col-span-2' >
                <h1 className=' capitalize text-tint text-5xl mt-9'>
                    {Details.ProjectName}
                </h1>
                <div className='mt-6'>
                {Details.Description.substring(0,250)}.......
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