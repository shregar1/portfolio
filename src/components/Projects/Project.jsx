import "./Project.css";
import Button from "../UI/Button";

const Project = (props) => {
  const url = props.details.url
  const title  = props.details.title
  const description = props.details.description
  const technologies = props.details.technologies
  const hide = props.hide ? "hide" : ""
  const state = props.prev ? "prev" : props.next ? "next" : ""

  return (
    <>
      <div className={"w-[90%] duration-500 " + hide + " " + state}>
        <div
          style={{
            backgroundImage: `url("${url}")`,
          }}
          className="flex flex-wrap flex-col rounded-2xl bg-center bg-cover duration-900 justify-center items-center h-[300px] mt-10 mb-5 mx-5"
        >
          <p className="text-white font-mono text-4xl text-center md:p-20 p-5 duration-500">
            {title}
          </p>
          <div className="flex flex-row gap-4 justify-center items-center">
            {
              technologies.map(technology => {
                return <> <span>{technology}</span> <span className="py-4 border-[1px] border-emerald-50"></span> </>
              })
            }
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center text-white mx-5">
          <p className="text-center py-5 font-mono text-gray-500 text-l">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center pb-5">
          <Button title="Source Code"></Button>
        </div>
      </div>
    </>
  );
};

export default Project;
