import React from "react";
import Sall from "/images/téléchargement.jpg";
import Corporate from "/images/Corporate.jpg";
import bureau from "/images/Modern.jpg";
import Nossas from "/images/Nossas.jpg";

export default function Realistion() {
  return (
    <div id="realisation" className="container mb-5 px-3">
      <div>
        <h3 className="section-title poppins-semibold p-3 text-center">Nos Réalisations</h3>
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="realisation-card card w-full max-w-[18rem]"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <img src={bureau} className="card-img-top h-[160px] object-cover" alt="Projet Alpha" />
            <div className="card-body flex flex-col justify-between bg-green-50">
              <h5 className="card-title mb-2">Projet Alpha</h5>
              <div className="flex items-center justify-between gap-2">
                <p className="card-text text-[14px]">Masterclasse engineer</p>
                <a href="#" className="btn btn-success btn-sm">
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div
            className="realisation-card card w-full max-w-[18rem]"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
          >
            <img src={Corporate} className="card-img-top h-[160px] object-cover" alt="Projet Beta" />
            <div className="card-body flex flex-col justify-between bg-green-50">
              <h5 className="card-title mb-2">Projet Beta</h5>
              <div className="flex items-center justify-between gap-2">
                <p className="card-text text-[14px]">Lorem ipsum dolor</p>
                <a href="#" className="btn btn-success btn-sm">
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div
            className="realisation-card card w-full max-w-[18rem]"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
          >
            <img src={Sall} className="card-img-top h-[160px] object-cover" alt="Projet Gamma" />
            <div className="card-body flex flex-col justify-between bg-green-50">
              <h5 className="card-title mb-2">Projet Gamma</h5>
              <div className="flex items-center justify-between gap-2">
                <p className="card-text text-[14px]">Lorem ipsum dolor</p>
                <a href="#" className="btn btn-success btn-sm">
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div className="realisation-card card w-full max-w-[18rem]" data-aos="fade-up">
            <img src={Nossas} className="card-img-top h-[160px] object-cover" alt="Projet Bridge" />
            <div className="card-body flex flex-col justify-between bg-green-50">
              <h5 className="card-title mb-2">Projet Bridge</h5>
              <div className="flex items-center justify-between gap-2">
                <p className="card-text text-[14px]">Lorem ipsum dolor</p>
                <a href="#" className="btn btn-success btn-sm">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
