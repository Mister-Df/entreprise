import React from "react";
import { SiDialogflow } from "react-icons/si";
import { MdBrandingWatermark } from "react-icons/md";
import { SiBoost } from "react-icons/si";

export default function Service() {
  return (
    <div id="service" className="container mt-5 px-3 py-2 md:py-3">
      <h2 className="section-title poppins-semibold mb-4 text-center">Nos services</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="service-card flex flex-col items-center justify-center border px-4 py-4 text-center shadow-2xs">
          <MdBrandingWatermark className="mb-2 text-5xl text-green-800" />
          <h6>Développement Web</h6>
          <p className="mb-0">Création de sites web modernes et responsives.</p>
        </div>
        <div className="service-card flex flex-col items-center justify-center border px-4 py-4 text-center shadow-2xs">
          <SiBoost className="mb-2 text-5xl text-green-800" />
          <h6>Marketing Digital</h6>
          <p className="mb-0">Stratégies de marketing en ligne pour accroître votre visibilité.</p>
        </div>
        <div className="service-card flex flex-col items-center justify-center border px-4 py-4 text-center shadow-2xs">
          <SiDialogflow className="mb-2 text-5xl text-green-800" />
          <h6>Consulting</h6>
          <p className="mb-0">Conseils personnalisés pour optimiser votre activité.</p>
        </div>
      </div>
    </div>
  );
}
