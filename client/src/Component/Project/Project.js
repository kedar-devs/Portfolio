import React,{useEffect,useState} from "react";
import ProjectCard from "../Card/ProjectCard";
import {api} from './../Api/axiosRequest'
import { useNavigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";

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
    <div className="lg:mt-32">
      <div className="grid grid-cols-1 lg:ml-20 lg:mr-20">
      {Project.map(ele=>{
          return(<ProjectCard data={ele} key={ele._id} onClick={()=>{navigate(`/Project/${ele._id}`)}}/>)
      })
       
      }
      </div>
    </div>:<div className="flex h-screen w-screen justify-center items-center">
              <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>}
    </>
  );
}

export default Project;
