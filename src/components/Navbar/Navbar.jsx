import Button from "../UI/Button";
import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const handleDownload = () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your static file
    const filePath = "/shreyansh_resume.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "shreyansh_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col justify-center p-2">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between py-5 bg-base-300">
        <span className="font-mono flex flex-col text-white text-2xl px-4 mb-4">SHREYANSH</span>
        <ul className="flex flex-row justify-between items-center px-4">
          <li>
            <Button onClick={handleDownload} title="DOWNLOAD CV"></Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
