import React from "react";
import Button from "../UI/Button";
import "./Contacts.css";

const Contacts = () => {
  const openGmailInBrowser = () => {
    const email = 'sengarsinghshreyansh@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    
    // Opens Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };
  return (
    <div className="w-[90%] flex flex-col flex-wrap justify-center items-center">
      <p className="text-2xl font-mono px-40 py-5">CONTACTS</p>
      <p className="contact-title text-7xl font-mono p-10 text-center m-8">
        TELL ME ABOUT YOUR NEXT PROJECT
      </p>
      <button className="w-[300px] h-[100px] rounded-xl border-4 border-white m-10 hover:bg-white hover:text-black" onClick={openGmailInBrowser}>GET IN TOUCH</button>
    </div>
  );
};

export default Contacts;
