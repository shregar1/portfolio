import "./TechStack.css";

const TechStack = (props) => {
    const technologies = props.technologies
    const number_of_tech = technologies.length
    const grid_cols = number_of_tech%2  === 1 ? (number_of_tech === 1  ? "sm:grid-cols-1": "sm:grid-cols-3"): (number_of_tech === 2 ? "sm:grid-cols-2": "sm:grid-cols-3"); 

  return (
    <>
      <div className={`grid grid-cols-1 gap-1 mt-1 ${grid_cols}`}>
        {technologies.map((technology, index) => {
            return (
                <div className="h-60px text-white tech-container hover:bg-white flex justify-center align-text-center bg-[#252529] transition-all" key={index}>
                <p className=" tech-title text-4xl font-mono font-bold px-40 py-10">
                  {technology}
                </p>
              </div>
            )
        })}
      </div>
    </>
  );
};

export default TechStack;
