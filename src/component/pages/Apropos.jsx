import React from "react";
import { Link } from "react-router-dom";
import busness from "/images/business.jpg";

const principles =[
  {
    title: "Écoute",
    text: "Chaque projet commence par la compréhension de votre activité et de vos priorités.",
  },
  {
    title: "Clarté",
    text: "Nous cherchons des solutions simples à comprendre et adaptées à vos usages.",
  },
  {
    title: "Accompagnement",
    text: "Nous avançons avec vous à chaque étape, de la réflexion à la mise en œuvre.",
  },
];

export default function Apropos() {
  return (
    <div id="apropos" className="bg-green-50 py-4">
      <div className="container my-5 px-3 py-4">
        <header className="mx-auto mb-5 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-800">Notre agence</p>
          <h1 className="section-title poppins-semibold mb-3">À propos de nous</h1>
          <p className="mb-0 leading-7 text-secondary">
            Nous aidons les entreprises à faire avancer leurs projets numériques avec des solutions réfléchies, accessibles et adaptées à leurs besoins.
          </p>
        </header>

        <section className="flex flex-col gap-4 rounded bg-white p-3 shadow-sm md:flex-row md:items-center md:gap-5 md:p-5" aria-labelledby="approche-title">
          <div className="w-full md:w-2/5">
            <img
              className="h-[230px] w-full rounded object-cover sm:h-[300px]"
              src={busness}
              alt="Une équipe échange autour d’un projet professionnel"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 id="approche-title" className="mb-3 text-2xl font-semibold">Une approche centrée sur votre activité</h2>
            <p className="leading-7 text-secondary">
              Un projet digital doit répondre à un besoin concret. Nous prenons le temps de comprendre votre public, vos objectifs et vos contraintes avant de proposer une direction.
            </p>
            <p className="mb-0 leading-7 text-secondary">
              Que vous souhaitiez créer un site, améliorer votre communication ou clarifier votre stratégie, nous adaptons notre accompagnement au contexte de votre entreprise.
            </p>
          </div>
        </section>

        <section className="my-5" aria-labelledby="valeurs-title">
          <h2 id="valeurs-title" className="section-title poppins-semibold mb-4 text-center">Ce qui guide notre travail</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {principles.map(({ title, text }) => (
              <article key={title} className="rounded border bg-white p-4">
                <h3 className="text-lg font-semibold text-green-800">{title}</h3>
                <p className="mb-0 leading-7 text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="text-center">
          <p className="mb-3 text-secondary">Vous souhaitez en savoir plus sur notre façon de travailler ?</p>
          <Link to="/contact" className="btn bg-green-800 text-light">Échangeons sur votre projet</Link>
        </div>
      </div>
    </div>
  );
}
