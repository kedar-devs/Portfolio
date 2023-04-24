import React,{useEffect,useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { api } from '../Api/axiosRequest'
import { Dna } from "react-loader-spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function IndivisualProject() {
    const navigate=useNavigate()
    const {id}=useParams()
    const [Details,setDetails]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        api.get(`/Project/GetOneProject/${id}`)
        .then(result=>{
            setDetails(result.data)
            setLoading(false)
        })
        
    })
    const NavigateToProject=async(link)=>{
        window.location.href=link
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    {!loading?
    <div className='mt-12  lg:px-32 lg:pb-8'>
        <div className='p-3 lg:p-0'>
        <div className='grid grid-cols-2'>
            <div className='flex justify-start'>
                <h1 className=' text-3xl font-bold capitalize text-tint'>
                    {Details.ProjectName}
                </h1>
            </div>
            <div className='flex justify-end'>
                <button className='border-2 border-spacing-0.5 border-tint' onClick={()=>{NavigateToProject(Details.ProjectUrl)}}>
                    <p className='lg:m-4 m-2 text-tint font-bold'>
                    Link to the Project
                    </p>
                </button>
            </div>
        </div>
        <div className='text-white text-base mt-12 font-sans '>
            <pre style={{ whiteSpace: 'pre-wrap',fontFamily:'sans-serif' }}>
        {Details.Description.substring(0,250)}..
        <Slider 
        {...settings}
        dotsClass='slick-dots text-white m-3'
        >
            {Details.ImageArray.map(ele=>{
                return <img src={ele} className=' lg:h-96 h-80 lg:m-5 w-full' key={ele}/> 
            })}
        {/* <img src='https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className=' h-96 w-3/4 '/>
        <img src='https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className=' h-96 w-3/4 '/> */}
        </Slider>
        ..{Details.Description.substring(251)}
        </pre>
        </div>
        <div className='flex justify-end text-lg text-tint' onClick={()=>{navigate('/Project')}}>
                Back
        </div>
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
    </>
  )
}

export default IndivisualProject