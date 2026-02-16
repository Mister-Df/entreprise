import React from "react";
import Logo from "../../common/Logo";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-green-950 text-light">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-3 py-4 text-center md:flex-row md:text-left">
          <Logo logo={"LOGO"} className={"text-2xl font-bold"} />

          <div className="flex items-center justify-center gap-2">
            <BsFillTelephoneFill className="mt-1" />
            <p className="mb-0 text-sm sm:text-base">contactcom15@gmail.com</p>
          </div>

          <div className="flex gap-2 text-xl sm:text-2xl">
            <FaLinkedin />
            <RiInstagramFill />
            <RiFacebookCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
}
