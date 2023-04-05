import React,{useState,useEffect} from "react";
import { ScrollMenu, VisibilityContext,Arrow } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import nodejs from "./../../assets/NodeJs.png";
import {api} from './../Api/axiosRequest'

function SkillsCard() {
  const [skills,setSkills]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    api.get('/Skill/GetAllSkills/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk')
    .then(result=>{
      setSkills(result.data)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])


  return (
    <div>
      {!loading?
      <ScrollMenu
      >
        {skills.map((ele=>{
          return(
            <div className="w-32 h-32 m-5">
            <img src={ele.SkillLink} />
          </div>)
        }))}
        
      </ScrollMenu>:<></>}
    </div>
  );
}

export default SkillsCard;
