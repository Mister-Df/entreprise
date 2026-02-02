import React from "react";
import { dataImage } from "../../libr/dataImage";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Slider from "react-slick";
import './home/Home.css'

export default function Patener() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="" className="bg-green-50  h-[311px]">
      <div>
        <h3 className="text-center py-3 poppins-semibold">Ils nous font confiance</h3>
        <div className=" container">
          <Slider
            {...settings}
            className="slider-container gap-3 flex-col flex"
          >
            {dataImage &&
              dataImage.map((elt) => (
                <li
                  key={elt}
                  className="bg-amber-50 border h-[200px] rounded-1 p-2 list-none"
                >
                  <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                      <img
                        className="objectFit"
                        src={elt.img}
                        alt="Photo"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h6>{elt.name}</h6>
                      <p style={{ marginTop: -5, fontSize: "14px" }}>
                        {elt.fonction}
                      </p>
                      <div className="text-amber-300 gap-1 flex">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                      </div>
                      <p className=" fw-semibold" style={{ fontSize: "14px" }}>
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
