import React from "react";
import { SiDialogflow } from "react-icons/si";
import { MdBrandingWatermark } from "react-icons/md";
import { SiBoost } from "react-icons/si";

export default function Service() {
  return (
    <div id="service" className=" container mt-5 p-3">
      <h2 className="text-center mb-4 poppins-semibold ">Nos services</h2>
      <div className="flex justify-between">
        <div className="shadow-2xs py-3 px-3 border flex-col items-center justify-center flex">
          <MdBrandingWatermark className="text-5xl text-green-800 mb-2 " />
          <h6>Développement Web</h6>
          <p>Création du sites web modernes et responsives.</p>
        </div>
        <div className="shadow-2xs px-3 py-3 border flex-col items-center justify-center flex">
          <SiBoost className="text-5xl text-green-800 mb-2 " />
          <h6>Marketing Digital</h6>
          <p>Strategis de marketing en ligne pour accroite votre visibilité.</p>
        </div>
        <div className="shadow-2xs px-3 py-3 border flex-col items-center justify-center flex">
          <SiDialogflow className="text-5xl text-green-800 mb-2 " />
          <h6>Consulting</h6>
          <p>Conseils personnalisés pour optimisé votre activité.</p>
        </div>
      </div>
    </div>
  );
}
