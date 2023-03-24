import React,{useEffect,useState} from 'react'
import home from './../../assets/Home.png'
import {api} from './../Api/axiosRequest'

function Home() {
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
    <div className=" text-6xl  text-white h-screen" style={{background:`url(${home})`}}>
      
      <div  className='ml-52 mt-48'>
        Hello,
      
      </div>
        <div className='ml-52 mt-6'>
        I am <span className='text-tint ml-2'>{user}</span>
        </div>
        <div className='m-52 mt-6 capitalize'>
        {about}
        <br />
        <button className="mt-6 border-2 border-tint text-tint text-lg">
            <p className='m-6'>Know more about me!</p>
        </button>
        </div>
        </div>

  )
}

export default Home