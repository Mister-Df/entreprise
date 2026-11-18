import React from "react";
import { dataImage } from "../../libr/dataImage";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Slider from "react-slick";
import "./home/Home.css";

export default function Patener() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
    <div id="partenaires" className="bg-green-50 py-4">
      <div className="container px-3">
        <header className="mx-auto mb-4 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-800">Construire ensemble</p>
          <h1 className="section-title poppins-semibold mb-3">Partenaires & collaborations</h1>
          <p className="mb-0 leading-7 text-secondary">
            Les projets numériques avancent mieux lorsque les compétences se complètent. Nous sommes ouverts aux échanges avec les entreprises et les professionnels qui partagent cette envie de créer des solutions utiles.
          </p>
        </header>
        <h2 className="section-title poppins-semibold py-3 text-center" data-aos="fade-up" data-aos-duration="1000">Ils nous font confiance</h2>
        <div className="container">
          <Slider {...settings} className="slider-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" >
            {dataImage &&
              dataImage.map((elt, index) => (
                <li key={`${elt.name}-${index}`} className="partner-card list-none rounded border bg-amber-50 p-3"
                data-aos="fade-up" data-aos-duration="2000">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div>
                      <img className="objectFit object-contain" src={elt.img} alt={`Photo de ${elt.name}`} />
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <h6>{elt.name}</h6>
                      <p style={{ marginTop: -5, fontSize: "13px" }}>{elt.fonction}</p>
                      <div className="flex gap-1 text-amber-300">
                        <FaStar className="text-xs" />
                        <FaStar className="text-xs" />
                        <FaStar className="text-xs" />
                        <FaStar className="text-xs" />
                        <FaRegStarHalfStroke className="text-xs" />
                      </div>
                      <p className="fw-semibold" style={{ fontSize: "12px" }}>
                        {elt.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </Slider>
        </div>
        <section className="my-5" aria-labelledby="collaboration-title">
          <h2 id="collaboration-title" className="section-title poppins-semibold mb-4 text-center">Des collaborations complémentaires</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <article className="rounded border bg-white p-4">
              <h3 className="text-lg font-semibold">Entreprises</h3>
              <p className="mb-0 leading-7 text-secondary">Pour faire évoluer votre présence en ligne, clarifier une offre ou lancer un nouveau projet numérique.</p>
            </article>
            <article className="rounded border bg-white p-4">
              <h3 className="text-lg font-semibold">Indépendants</h3>
              <p className="mb-0 leading-7 text-secondary">Pour associer nos compétences autour d’un projet et proposer un accompagnement adapté aux besoins du client.</p>
            </article>
            <article className="rounded border bg-white p-4">
              <h3 className="text-lg font-semibold">Partenaires techniques</h3>
              <p className="mb-0 leading-7 text-secondary">Pour partager une expertise, coordonner les outils et faciliter la réalisation de projets web.</p>
            </article>
          </div>
        </section>
        <div className="mb-3 rounded bg-white px-4 py-5 text-center shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">Vous souhaitez collaborer ?</h2>
          <p className="mb-3 text-secondary">Présentez votre activité et dites-nous comment vous aimeriez travailler ensemble.</p>
          <Link to="/contact" className="btn bg-green-800 text-light">Proposer une collaboration</Link>
        </div>
      </div>
    </div>
  );
}
