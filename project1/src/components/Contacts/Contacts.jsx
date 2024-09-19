import React from "react";
import Button from "../UI/Button";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="w-[90%] flex flex-col flex-wrap justify-center items-center">
      <p className="text-2xl font-mono px-40 py-5">CONTACTS</p>
      <p className="contact-title text-7xl font-mono p-10 text-center m-8">
        TELL ME ABOUT YOUR NEXT PROJECT
      </p>
      <button className="w-[300px] h-[100px] rounded-xl border-4 border-white m-10">GET IN TOUCH</button>
    </div>
  );
};

export default Contacts;
