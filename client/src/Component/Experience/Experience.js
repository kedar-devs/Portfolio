import React,{useState,useEffect} from 'react'
import ExperienceCard from '../Card/ExperienceCard'
import {api} from './../Api/axiosRequest'
function Experience() {
  const [card,setExperience]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    api.get('/Experience/GetAllExperience/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk')
    .then(result=>{
      setExperience(result.data)
      setLoading(false)
    })
  },[])
  return (
    <div>
        <h1 className='mt-10 ml-24 text-white text-3xl '>
            My Journey
        </h1>
        <>
        {!loading?
        <div className='mt-16 grid grid-cols-1'>
            <div className=' mx-24'>
              {card.map(ele=>{
                  return <ExperienceCard data={ele} key={ele._id}/>
              })}
                
            </div>
        </div>:<></>}
        </>
    </div>
  )
}

export default Experience