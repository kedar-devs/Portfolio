import React, { useState, useEffect } from "react";
import ExperienceCard from "../Card/ExperienceCard";
import { Dna } from "react-loader-spinner";
import { api } from "./../Api/axiosRequest";
function Experience() {
  const [card, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api
      .get(
        "/Experience/GetAllExperience/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijoia2VkYXJkMjQ5LmtkQGdtYWlsLmNvbSIsImlhdCI6MTY3ODc3NTI2MX0.RIc9W1h6psOH3kQ9GMlTuVDUCh6bN1BURsg11nAHmVk"
      )
      .then((result) => {
        setExperience(result.data);
        setLoading(false)
      });
  }, []);
  return (
    <div>
      <h1 className="mt-10 ml-24 text-white text-3xl">My Journey</h1>
      <>
        {!loading ? (
          <div className="mt-16 grid grid-cols-1 dark:min-h-screen">
            <div className="lg:mx-24 mx-3">
              {card.map((ele) => {
                return <ExperienceCard data={ele} key={ele._id} />;
              })}
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
    </div>
  );
}

export default Experience;
