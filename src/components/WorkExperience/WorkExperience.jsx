import { useEffect, useState } from "react";
import "./WorkExperience.css";

const WorkExperience = (props) => {
  const [showDetails, setshowDetails] = useState("hide");

  console.log(showDetails)

  const company_name = props.work_experience.company_name;
  const duration = props.work_experience.duration;
  const role = props.work_experience.role;
  const responsibilities = props.work_experience.responsibilities;

  return (
    <div
      className="work-experience text-white bg-[#252529] flex flex-col flex-wrap justify-center items-center rounded-2xl"
      onClick={() => setshowDetails(showDetails==="hide" ? "show" : "hide")}
    >
      <ul className="w-full">
        <li className={"work-experience-company flex flex-wrap justify-center items-center rounded-2xl " + showDetails}>
          <p className="work-experience-company-title text-6xl font-mono font-bold text-white py-10 block px-10">
            {company_name}
          </p>
        </li>
        <li className={"work-experience-company-details flex-wrap justify-center items-center "+ showDetails}>
          <div className="text-white bg-[#252529] justify-center items-center rounded-2xl">
            <ul>
              <li className="work-experience-company-duration border-t-[1px] border-gray-900 flex justify-center items-center">
                <p className="text-l text-gray-400 font-mono py-3 justify-center text-center px-10">
                  {duration}
                </p>
              </li>
              <li className="work-experience-company-role border-t-[1px] border-gray-900 flex justify-center items-center">
                <p className="text-l text-gray-400 font-mono py-3 justify-center text-center px-10">
                  {role}
                </p>
              </li>
              <li className="work-experience-company-responsibilities border-t-[1px] border-gray-900 flex justify-center items-center">
                <ul>
                  {responsibilities.map((responsibility, index) => {
                    return (
                      <li key={index}>
                        <p className="text-l text-gray-400 font-mono py-3 justify-center text-center px-10">
                          {responsibility}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
