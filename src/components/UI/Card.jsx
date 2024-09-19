import React from "react"; // Import React
import "./Card.css";

const Card = (props) => {
  const logo_url = "public/decentro-logo.svg";
  const title = "DECENTRO";
  const description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. debitis illum inventore eum explicabo amet deleniti quisquam!";

  return (
    <div className="card bg-[#252529] h-auto max-w-full rounded-lg p-4">
      <div className="card-detail flex flex-col justify-center items-center">
        <p className="ml-2 text-white font-mono text-6xl p-10">{title}</p>
      </div>
      <div className="card-content mt-4">
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
