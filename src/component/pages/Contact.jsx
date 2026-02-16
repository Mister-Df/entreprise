import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="mt-2 bg-green-800 px-3 py-7 text-light md:py-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <h4 className="section-title mb-1">Prêt à développer votre entreprise !</h4>
        <button className="btn mt-2 w-full max-w-[220px] border">Contactez-nous</button>
      </div>
    </div>
  );
}
