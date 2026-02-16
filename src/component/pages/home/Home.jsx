import React from "react";
import "./Home.css";
import illustration from "/images/illustration.png";
import Service from "../Service";
import Apropos from "../Apropos";
import Realistion from "../Realistion";
import Patener from "../Patener";
import Contact from "../Contact";

export default function Home() {
  return (
    <div id="accueil">
      <div className="bg-green-50">
        <div className="container flex flex-col items-center gap-6 pb-5 pt-4 md:flex-row md:items-start md:py-6">
          <div className="w-full md:w-1/2">
            <h3 className="hero-title poppins-semibold">
              Des solutions digitales fiables pour votre entreprise
            </h3>
            <p className="hero-subtitle mt-2 max-w-[52ch]">
              Développons ensemble vos projets.
            </p>
            <div className="flex w-full flex-col items-start gap-2 pt-3 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex h-9 w-full cursor-pointer items-center justify-center rounded bg-green-800 px-3 py-1 text-light sm:w-auto">
                Nos services
              </div>
              <div className="flex h-9 w-full cursor-pointer items-center justify-center rounded px-3 outline sm:w-auto">
                Contactez-nous
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="h-[220px] w-full rounded object-cover sm:h-[260px] md:h-[250px]"
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
      <div>
        <Patener />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
