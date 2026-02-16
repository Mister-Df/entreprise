import React from "react";
import busness from "/images/business.jpg";

export default function Apropos() {
  return (
    <div id="apropos" className="bg-green-50">
      <div className="container my-5 px-3 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="w-full md:w-auto">
            <img
              className="h-[220px] w-full rounded object-cover sm:h-[260px] md:h-[230px] md:w-[320px]"
              src={busness}
              alt="une équipe"
            />
          </div>
          <div className="w-full md:max-w-[620px]">
            <h2 className="section-title">
              <span className="poppins-semibold uppercase">À</span> propos de nous
            </h2>
            <h4 className="text-[1.1rem] md:text-[1.25rem]">Qui sommes-nous ?</h4>
            <p className="mb-2 leading-7">
              Notre agence offre des solutions digitales innovantes pour soutenir
              la créativité de votre entreprise.
            </p>
            <div className="space-y-1">
              <p className="mb-0">✓ Fiabilité et expertise</p>
              <p className="mb-0">✓ Innovation</p>
              <p className="mb-0">✓ Accompagnement sur mesure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
