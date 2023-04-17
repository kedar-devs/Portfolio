import React,{useEffect,useState} from 'react'
import home from './../../assets/Home.png'
import homeSmall from './../../assets/HomeSmall.png'
import {api} from './../Api/axiosRequest'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  const [user,setUser]=useState('Kedar Devasthali')
  const [about,setAbout]=useState('Full Stack Developer')
  useEffect(()=>{
    api.get('/User/GetUser/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk')
    .then(result=>{
      let firstName=result.data.name.split(' ')[0]
      setUser(firstName)
      setAbout(result.data.about)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div className=" lg:text-6xl text-white text-4xl" style={{background:`url(${home})`}}>
      
      <div  className='lg:ml-52 lg:mt-48 ml-32 mt-28'>
        Hello,
      
      </div>
        <div className='lg:ml-52 lg:mt-6 ml-20 mt-2'>
        I am <span className='text-tint ml-2'>{user}</span>
        </div>
        <div className='lg:m-52 lg:mt-6 ml-4 mt-2 capitalize'>
        {about}
        <br />
        <button className="mt-6 border-2 lg:ml-0 ml-12 border-tint text-tint text-lg" onClick={()=>{navigate('/about')}}>
            <p className='lg:m-6 m-3'>Know more about me!</p>
        </button>
        </div>
        <img src={homeSmall} className='lg:hidden md:hidden mt-24' />
        </div>

  )
}

export default Home