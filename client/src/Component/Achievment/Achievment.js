import React,{useEffect,useState} from 'react'
import AchievmentCard from '../Card/AchievmentCard'
import { api } from '../Api/axiosRequest'
function Achievment() {
  const [card,setCard]=useState([])
  useEffect(()=>{
    api.get('/Achievment/GetAllAchievment/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk')
    .then(result=>{
      setCard(result.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div className=' h-72 grid grid-cols-3'>
        <div className=' border-r-4 border-tint'>
                <h1 className='text-3xl text-end mr-10 text-tint capitalize'><span className='text-5xl font-extrabold'>A</span>chievements</h1>
        </div>
    <div className='col-span-2 m-5 overflow-y-hidden'>
      {card.map(ele=>{
        return <AchievmentCard data={ele} key={ele._id}/>
      })}
    
    </div>
    </div>
  )
}

export default Achievment