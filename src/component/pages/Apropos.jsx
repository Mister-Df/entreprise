import React from "react";
import busness from "/images/business.jpg";

export default function Apropos() {
  return (
    <div id="apropos" className="bg-green-50">
      <div className="container my-5 py-4">
        <div className="flex gap-4">
          <div>
            <img className="w-[320px] h-[230px]" src={busness} alt="une collectives" />
          </div>
          <div>
            <h2>
              <span className="poppins-semibold uppercase">à</span> propos de nous
            </h2>
            <h4>Qui sommes-nous ?</h4>
            <p>
              Notre agence speciale offrr des solutions digitales innovante pour
              surveiller la creativité de votre entréprise
            </p>
            <div>
              <p>✔  Fiabilité et expertise</p>
              <p>✔  Innovation</p>
              <p>✔  Accompagnement sur mesure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
