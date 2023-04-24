import React, { useState, useEffect } from "react";
import insta from "./../../assets/insta.png";
import linkedIn from "./../../assets/linkedIn.png";
import Twitter from "./../../assets/Twitter.png";
import Gmail from "./../../assets/Gmail.png";
import Slider from "react-slick";
import { Dna } from "react-loader-spinner";
import "./projectcard.css";
import { api } from "../Api/axiosRequest";
function AboutCard() {
  const [name, setName] = useState();
  const [skills,setSkill]=useState()
  const [details, setDetails] = useState({});
  const [descriptions, setDescription] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(
        "/User/GetUser/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk"
      )
      .then((result) => {
        
        setName(result.data.name);
        setDescription(result.data.description);
        const detail = {
          Pp:result.data.profilepic,
          Role: result.data.about,
          CompanyRole: result.data.CurrentRole,
          Company: result.data.CurrentComp,
          CurrentSkill: result.data.CurrentSkill,
        };
        setDetails(detail);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading ? (
        <div className=" text-white">
          <div className="lg:grid lg:grid-cols-4 lg:bgAbout bgAboutSmall ">
            <div className="lg:ml-24 ml-24">
              <img
                src={details.Pp}
                alt="my profile"
                className=" lg:h-64 h-44"
              />
            </div>
            <div className=" lg:col-span-3 text-black lg:mt-16">
              <div className="lg:grid lg:grid-cols-3 p-4">
                <div>
                  <h1 className=" uppercase lg:text-4xl lg:ml-0 text-lg ml-10  w-2/3 font-extrabold">
                    {name}
                  </h1>
                </div>
                <div className=" lg:font-semibold lg:border-l-8 lg:border-t-0 lg:border-black border-t-2 border-black lg:text-lg text-base font-bold">
                  <div className="lg:ml-4">
                    {details.Role}
                    <br />
                    {details.CompanyRole} @{details.Company}
                    <br />
                    {details.CurrentSkill}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-4 ">
            <div>
            </div>
            <div className=" text-white lg:col-span-3 lg:w-4/5">
            <div >
            <pre style={{ whiteSpace: 'pre-wrap',fontFamily:'sans-serif' }}>
              {descriptions}
              </pre>
            </div>
            <div className="flex">
              <a href="https://twitter.com/DevsKedar" target="_blank">
              <img src={Twitter} className="m-2" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kedard249.kd@gmail.com" target="_blank">
              <img src={Gmail} className="m-2" />
              </a>
              <a href="https://www.linkedin.com/in/kedar-devasthali-0b8b081b5/" target="_blank">
              <img src={linkedIn} className="m-2" />
              </a>
              <a href="https://instagram.com/kedar_devs?igshid=ZDdkNTZiNTM=" target="_blank">
              <img src={insta} className="m-2" />
              </a>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default AboutCard;
