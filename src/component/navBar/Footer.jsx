import React from "react";
import Logo from "../../common/Logo";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="text-light bg-green-950">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo
            logo={"LOGO"}
            className={" py-3 font-bold text-2xl"}
          />
            <div className="border-end opacity-50 h-10"></div>
          
          <div className="flex justify-center mt-3 gap-2">
            <BsFillTelephoneFill className="mt-1" />
            <div className="border-end mb-3 opacity-20"></div>
            <p>contactcom15@gmail.com</p>
          </div>
            <div className="border-end opacity-50 h-10"></div>
          <div className="flex text-2xl gap-2">
            <FaLinkedin />
            <RiInstagramFill />
            <RiFacebookCircleFill />

          </div>
        </div>
      </div>
    </div>
  );
}
