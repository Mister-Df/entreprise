import React from "react";
import { dataImage } from "../../libr/dataImage";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Slider from "react-slick";
import "./home/Home.css";

export default function Patener() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-green-50 py-4">
      <div>
        <h3 className="section-title poppins-semibold py-3 text-center">Ils nous font confiance</h3>
        <div className="container">
          <Slider {...settings} className="slider-container flex flex-col gap-3">
            {dataImage &&
              dataImage.map((elt) => (
                <li key={elt.name} className="partner-card list-none rounded border bg-amber-50 p-3">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div>
                      <img className="objectFit" src={elt.img} alt={`Photo de ${elt.name}`} />
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <h6>{elt.name}</h6>
                      <p style={{ marginTop: -5, fontSize: "14px" }}>{elt.fonction}</p>
                      <div className="flex gap-1 text-amber-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                      </div>
                      <p className="fw-semibold" style={{ fontSize: "14px" }}>
                        {elt.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
