import React from "react";
import { Link } from "react-router-dom";
import Sall from "/images/téléchargement.jpg";
import Corporate from "/images/Corporate.jpg";
import bureau from "/images/Modern.jpg";
import Nossas from "/images/Nossas.jpg";

const projects = [
  {
    title: "Site vitrine",
    category: "Développement Web",
    description: "Présenter une activité, ses services et ses coordonnées dans un site clair et adapté au mobile.",
    image: bureau,
    alt: "Espace de travail moderne",
  },
  {
    title: "Image de marque",
    category: "Identité & communication",
    description: "Créer une présentation cohérente de l’entreprise à travers ses supports numériques.",
    image: Corporate,
    alt: "Environnement professionnel",
  },
  {
    title: "Communication digitale",
    category: "Marketing Digital",
    description: "Organiser les messages et les contenus pour mieux faire connaître une offre.",
    image: Sall,
    alt: "Présentation d’un projet professionnel",
  },
  {
    title: "Conseil numérique",
    category: "Accompagnement",
    description: "Faire le point sur les besoins et établir des pistes d’action adaptées à l’entreprise.",
    image: Nossas,
    alt: "Espace de réunion professionnel",
  },
];



export default function Realistion() {
  return (
    <main id="realisation" className="container mb-5 px-3">
      <header className="mx-auto mb-5 max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-800">Nos savoir-faire en pratique</p>
        <h1 className="section-title poppins-semibold mb-3">Réalisations & formats de projets</h1>
        <p className="mb-0 leading-7 text-secondary">
          Chaque collaboration est différente. Voici des exemples de types de projets que nous pouvons construire avec vous, selon vos besoins et vos objectifs.
        </p>
      </header>

      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map(({ title, category, description, image, alt }) => (
          <article key={title} className="realisation-card card w-full max-w-[20rem] overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <div className="group">
            <img src={image} className="card-img-top h-[175px] object-cover transition-transform duration-500 group-hover:scale-105" alt={alt} />
            <div className="card-body flex flex-col bg-green-50">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-green-800">{category}</p>
              <h2 className="card-title text-lg font-semibold">{title}</h2>
              <p className="card-text leading-6 text-secondary">{description}</p>
            </div>
          </div>
          </article>
        ))}
      </div>

      <section className="my-5 rounded bg-green-50 px-4 py-5 text-center" aria-labelledby="projet-title">
        <h2 id="projet-title" className="mb-2 text-xl font-semibold">Imaginons votre prochain projet</h2>
        <p className="mb-3 text-secondary">Décrivez-nous votre besoin : nous verrons ensemble quelle approche peut vous convenir.</p>
        <Link to="/contact" className="btn bg-green-800 text-light">Présenter mon projet</Link>
      </section>
    </main>
  );
}
