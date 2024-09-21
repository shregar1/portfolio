import WorkExperience from "../WorkExperience/WorkExperience.jsx";
import "./Home.css";
import Introduction from "../Introduction/Introduction.jsx";

const Home = (props) => {
  return (
    <>
      <div className="home flex flex-row-reverse md:flex-row flex-wrap-reverse justify-center md:justify-between items-center py-16 w-full">
        <div className="intro-container text-white flex justify-center items-center transition-all w-full md:w-1/2">
          <div className="text-white transition-all">
            <ul className="flex flex-col">
              <li className="home-title flex flex-col flex-wrap justify-center items-center md:items-start text-7xl font-medium px-4">
              SHREYANSH
              </li>
              <li className="flex flex-wrap justify-center md:justify-start items-center pt-5 px-4">
                <Introduction />
              </li>
              <li className="flex justify-center md:justify-start items-center px-4 pt-5">
                <p className="home-details text-lg text-gray-500 font-mono text-center md:text-start">
                  A passionate and dedicated software engineer with a thirst for
                  knowledge and a drive to make an impact.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="image-container flex justify-center items-center transition-all w-[100%] md:w-[50%]">
          <div className="image-background-container h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[320px] lg:w-[320px] text-white flex justify-center items-center"></div>
        </div>
      </div>
      <div className="text-gray-200 flex justify-center items-center transition-all w-[100%]">
        <p className="text-2xl font-mono px-40 text-center">WORK EXPERIENCE</p>
      </div>
      <div className="work-experiences grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1 justify-between w-full pt-10 cursor-pointer">
        {props.work_experiences.map((work_experience, index) => {
          return (
            <div className="flex flex-col w-full" key={work_experience.id}>
              <WorkExperience work_experience={work_experience} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;