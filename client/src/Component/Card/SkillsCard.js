import React,{useState,useEffect} from "react";
import { Dna } from "react-loader-spinner";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div>
      {!loading?
      <Slider
       {...settings}
       dotsClass= "slick-dots mb-9"
      >
        {skills.map((ele=>{
          return(
            <div className="justify-center">
            <img src={ele.SkillLink} className="w-36 h-32"/>
          </div>)
        }))}
        </Slider>
      :<>
      
      </>}
    </div>
  );
}

export default SkillsCard;
