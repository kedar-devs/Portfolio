import React,{useEffect,useState} from 'react'
import AchievmentCard from '../Card/AchievmentCard'
import { api } from '../Api/axiosRequest'
import { Dna } from "react-loader-spinner";
function Achievment() {
  const [card,setCard]=useState([])
  const [loading,setLoader]=useState(true)
  useEffect(()=>{
    api.get('/Achievment/GetAllAchievment/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk')
    .then(result=>{
      setCard(result.data)
      setLoader(false)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <>
    {!loading?
    <div className=' lg:h-72 h-80 grid lg:grid-cols-3 grid-cols-1'>
        <div className=' lg:border-r-4 border-tint'>
                <h1 className='lg:text-3xl text-5xl lg:text-end text-center mr-10 text-tint capitalize'><span className='text-5xl font-extrabold'>A</span>chievements</h1>
        </div>
    <div className='col-span-2 lg:m-5 m-2 overflow-y-auto no-scrollbar'>
      {card.map(ele=>{
        return <AchievmentCard data={ele} key={ele._id}/>
      })}
    
    </div>
    </div>:<div className="flex h-screen w-screen justify-center items-center">
              
            </div>}
    </>
  )
}

export default Achievment