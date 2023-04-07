import React,{useEffect,useState} from "react";
import ProjectCard from "../Card/ProjectCard";
import {api} from './../Api/axiosRequest'
import { useNavigate } from "react-router-dom";

function Project() {
  const [Project,setProject]=useState([])
  const [Loading,setLoading]=useState(true)
  const navigate=useNavigate()
  useEffect(()=>{
    api.get('/Project/GetAllProject/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk')
    .then(result=>{
      setProject(result.data)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <>
    {!Loading?
    <div className="mt-32">
      <div className="grid grid-cols-1 ml-20 mr-20">
      {Project.map(ele=>{
          return(<ProjectCard data={ele} key={ele._id} onClick={()=>{navigate(`/Project/${ele._id}`)}}/>)
      })
       
      }
      </div>
    </div>:<></>}
    </>
  );
}

export default Project;
