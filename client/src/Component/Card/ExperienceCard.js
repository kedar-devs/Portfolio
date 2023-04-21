import React,{useState,useEffect} from 'react'
import moment from 'moment'
import { Dna } from "react-loader-spinner";

import './projectcard.css'
function ExperienceCard(props) {
    const [Experience,setExperience]=useState({})
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setExperience(props.data)
        let sDate=moment(props.data.StartDate).format('MMM-yyyy')
        setStartDate(sDate)
        if(props.data.CurrEmp){
            setEndDate('Present')
        }
        else{
        let dDate=moment(props.data.EndDate).format('MMM-yyyy')
        setEndDate(dDate)
        }
        setLoading(false)
    },[])
  return (
    <>
    <div className='mt-5'>
    {!loading?
    <div className=' h-2/4 text-white'>
        
        <ul>
            <li className='text-lg'>{startDate}-{endDate}</li>
        </ul>
            <div className='grid lg:grid-cols-8'>
                <div className=' justify-end'>
                    <img src={Experience.CompanyLogo} className=' h-24 w-24' />
                </div>
                <div className='col-span-3 text-lg'>
                    <h2>{Experience.Role}</h2>
                    <h2 className='text-tint text-2xl'>{Experience.CompanyName}</h2>
                    <hr />
                    <p className='text-base'>{Experience.Location}</p>
                </div>
            </div>
            <div className='mt-4 '>
            {Experience.JobDescription}
            </div>
            <div className='mt-2 border-2 border-tint flex lg:w-2/3 w-5/6'>
                <span className='m-2'><span>Skills:</span>{Experience.Skills.map((ele)=>{
                    return <> {ele} ,</>
                })}</span>
            </div>
            <div className='mt-20 h-1 borderGrad'>

            </div>
            
        
    </div>:<>
    <div className="flex h-screen w-screen justify-center items-center">
              <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
    </>}
    </div>
    </>
  )
}

export default ExperienceCard