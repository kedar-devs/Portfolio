import React, { useState, useEffect } from "react";
import insta from "./../../assets/insta.png";
import linkedIn from "./../../assets/linkedIn.png";
import Twitter from "./../../assets/Twitter.png";
import Gmail from "./../../assets/Gmail.png";
import Slider from "react-slick";
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
          <div className="grid grid-cols-4 bgAbout ">
            <div className="ml-24">
              <img
                src="https://images.unsplash.com/photo-1679217121503-264c00693d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="my profile"
                className=" h-64"
              />
            </div>
            <div className=" col-span-3 text-black mt-10">
              <div className="grid grid-cols-3 p-4">
                <div>
                  <h1 className=" uppercase text-4xl  w-2/3 font-extrabold">
                    {name}
                  </h1>
                </div>
                <div className=" font-semibold border-l-8 border-black text-lg">
                  <div className="ml-4">
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
          <div className="grid grid-cols-4 ">
            <div>
            </div>
            <div className=" text-white col-span-3 w-4/5">
            <div >
              {descriptions}
            </div>
            <div className="flex">
              <img src={Twitter} className="m-2" />
              <img src={Gmail} className="m-2" />
              <img src={linkedIn} className="m-2" />
              <img src={insta} className="m-2" />
            </div>
          </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default AboutCard;
