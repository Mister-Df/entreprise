import React from "react";
import Sall from "/images/téléchargement.jpg";
import Corporate from "/images/Corporate.jpg";
import bureau from "/images/Modern.jpg";
import Nossas from "/images/Nossas.jpg";

export default function Realistion() {
  return (
    <div id="realisation" className="container mb-5">
      <div>
        <h3 className="text-center p-3 poppins-semibold">Nos Réalisations</h3>
        <div className="flex justify-center  gap-3">
          <div className="card" style={{ width: "18rem" }} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <img src={bureau} className="card-img-top h-[160px]" alt="..." />
            <div className="card-body bg-green-50">
              <h5 className="card-title">Projet Alpha</h5>
              <div className="flex gap-2  items-center justify-between">
                <p className="card-text text-[14px]">Masterclasse ingeneer</p>
                <a href="#" className="btn btn-success btn-sm">
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            <img src={Corporate} className="card-img-top h-[160px]" alt="..." />
            <div className="card-body bg-green-50">
              <h5 className="card-title">Projet Beta</h5>
              <div className="flex gap-2 justify-between items-center">
                <p className="card-text text-[14px]">Lorem, ipsum dolor</p>
                <a href="#" className="btn btn-success btn-sm">
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            <img src={Sall} className="card-img-top h-[160px]" alt="..." />
            <div className="card-body bg-green-50">
              <h5 className="card-title">Projet Gamma</h5>
              <div className="flex gap-2 justify-between items-center ">
                <p className="card-text text-[14px]">Lorem ipsum dolor</p>
                <a href="#" className="btn btn-success btn-sm">
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }} data-aos="fade-up">
            <img src={Nossas} className="card-img-top h-[160px]" alt="..." />
            <div className="card-body bg-green-50">
              <h5 className="card-title">Projet Bridje</h5>
              <div className="flex gap-2 justify-between items-center">
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
