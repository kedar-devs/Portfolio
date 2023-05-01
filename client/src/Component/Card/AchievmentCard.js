
import React,{useState,useEffect} from 'react'

function AchievmentCard(props) {
  const [Achievment,setAchievment]=useState({})
  useEffect(()=>{
    setAchievment(props.data)
  },[props])
  return (
    <div className='lg:m-3 my-2 border-2 border-tint justify-center text-white sm:h-4/6'>
        <div className='lg:m-5 m-2'>
            <div className='flex mt-6'>
             <h1 className='text-1xl mr-4 text-tint'>{Achievment.EventName}</h1>|<h2 className='text-1xl ml-2 '>{Achievment.Title}</h2>
             </div>
            <div className=' text-md mt-4 lg:w-4/5'>
            {Achievment.Description}<br />
            Issued By:{Achievment.IssuedBy}
            </div>
            <a className='text-tint text-sm mt-3' href={Achievment.Link} target='_blank'>view Certificate</a>
        </div>
    </div>
  )
}

export default AchievmentCard