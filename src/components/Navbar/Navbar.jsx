import Button from "../UI/Button";
import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {

  const handleDownload = () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your static file
    const filePath = '/shreyansh_resume.pdf';

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute to the file path
    link.href = filePath;

    // Set the download attribute to the desired file name
    link.download = 'shreyansh_resume.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className='flex flex-row justify-between px-20 py-5 bg-base-300'>
        <div><span className="font-mono text-xl whitespace-nowrap">SHREYANSH</span></div>
        <div>
                <ul className='flex flex-row justify-between items-center gap-8'>
                    <li>
                    <Button onClick={handleDownload} title="DOWNLOAD CV"></Button>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar
