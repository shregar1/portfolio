import React from "react";
import Button from "../UI/Button";
import "./Contacts.css";

const Contacts = () => {
  const openGmail = () => {
    const email = "sengarsinghshreyansh@gmail.com";
    const gmailUrlBrowser = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    const gmailUrlApp = `mailto:${email}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = gmailUrlApp;
    } else {
      window.open(gmailUrlBrowser, "_blank");
    }
  };
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="text-2xl text-white font-mono py-5">CONTACTS</p>
      <p className="contact-title text-7xl md:text-6xl md:w-1/2 font-mono text-center w-full">
        TELL ME ABOUT YOUR NEXT PROJECT
      </p>
      <button
        className="w-[300px] h-[100px] rounded-xl border-4 border-white m-10 hover:bg-white hover:text-black text-white"
        onClick={openGmail}
      >
        GET IN TOUCH
      </button>
    </div>
  );
};

export default Contacts;
