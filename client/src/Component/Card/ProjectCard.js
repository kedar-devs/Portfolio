import React,{useEffect,useState} from 'react'
import {ReactComponent as ReactLogo} from './../../assets/React.svg'
import {ReactComponent as Node} from './../../assets/NodeJs.svg'
import {ReactComponent as Mongo} from './../../assets/Mongo.svg'
import ProjectImg from './../../assets/Project.png'
import './projectcard.css'
import {api} from './../Api/axiosRequest'

function ProjectCard(props) {
    console.log(props)
    const [Details,setDetails]=useState(props.data)
    const [loading,setLoading]=useState(true)
    const [skills,setSkills]=useState([])
    useEffect(()=>{
        api.get('/Skill/GetAllSkills/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk')
        .then(result=>{
            setSkills(result.data)

        })
        setDetails(props.data)
        setLoading(false)
    },[props])
  return (
    <div className='flex flex-col border-2 border-tint m-5' onClick={props.onClick}>
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:m-0 m-3'>
            <div className='imageBackground flex h-80 lg:col-span-1 '>
                <img src={ProjectImg} className='lg:h-60 lg:w-60  lg:mt-10 lg:ml-12' />
            </div>
            <div className='justify-center text-white col-span-2' >
                <h1 className=' capitalize text-tint text-5xl mt-9'>
                    {Details.ProjectName}
                </h1>
                <div className='mt-6'>
                {Details.Description.substring(0,250)}.......
            </div>
            <br />
            <div className='flex mt-6 overflow-x-auto'>
                {!loading?
                < >
                {skills.map(ele=>{
                    {console.log(ele)}
                   return Details.SkillsArray.includes(ele.Skill)?<img src={ele.SkillLink} className=' h-16 w-20 m-4' />:<div className='text-white'></div>
                })} 
                    </>:<></>}
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard