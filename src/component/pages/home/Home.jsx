import React from "react";
import "./Home.css";
import busness from "/images/business.jpg";
import illustration from "/images/illustration.png";
import Service from "../Service";
import Apropos from "../Apropos";
import Realistion from "../Realistion";



export default function Home() {
  return (
    <div className=" ">
      <div className="bg-green-50">
        <div className="flex pt-3 container ">
          <div className="">
            <h3 className="poppins-semibold">
              Des solutions digitales fiables pour votre entreprise
            </h3>
            <p className="">Développons ensemble vos projets.</p>
            <div className="flex items-center pt-2.5 gap-3">
              <div className="bg-green-800 cursor-pointer flex items-center justify-center h-8.5 text-light px-3 py-1 rounded">
                Nos services
              </div>
              <div className="px-3 flex items-center cursor-pointer justify-center rounded h-8 outline">
                Contactez-nous
              </div>
            </div>
          </div>
          <div>
            {/* <img
            className="w-[800px] object-center h-[200px]"
            src={busness}
            alt="personnages en entreprise"
          /> */}
            <img
              className="w-[800px] object-cover h-[250px]"
              src={illustration}
              alt="personnages en entreprise"
            />
          </div>
        </div>
      </div>
        <div>
          <Service />
        </div>
        <div>
          <Apropos />
        </div>
        <div>
          <Realistion />
        </div>
    </div>
  );
}
