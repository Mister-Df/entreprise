import React from "react";
import { Link } from "react-router-dom";
import { SiDialogflow, SiBoost } from "react-icons/si";
import { MdBrandingWatermark } from "react-icons/md";

const services =[
  {
    title: "Développement Web",
    Icon: MdBrandingWatermark,
    intro: "Une présence en ligne claire, rapide et adaptée à vos clients.",
    details:
      "Nous concevons des sites vitrines et des expériences web qui présentent votre activité avec clarté, sur ordinateur comme sur mobile.",
    items: ["Structure et design adaptés à votre activité", "Intégration responsive", "Accompagnement à la mise en ligne"],
  },
  {
    title: "Marketing Digital",
    Icon: SiBoost,
    intro: "Des actions cohérentes pour faire connaître votre entreprise.",
    details:
      "Nous vous aidons à choisir les bons canaux et à organiser votre communication numérique autour de vos objectifs.",
    items: ["Définition des objectifs de communication", "Planification de contenus", "Pistes pour améliorer votre visibilité"],
  },
  {
    title: "Conseil & accompagnement",
    Icon: SiDialogflow,
    intro: "Un regard extérieur pour clarifier vos priorités digitales.",
    details:
      "Nous faisons le point sur vos besoins et vos outils pour vous aider à prendre des décisions adaptées à votre organisation.",
    items: ["Échange autour de vos enjeux", "Recommandations priorisées", "Plan d’action adapté à vos ressources"],
  },
];

const steps = [
  { number: "01", title: "Échange", text: "Nous prenons le temps de comprendre votre activité, vos besoins et vos objectifs." },
  { number: "02", title: "Proposition", text: "Nous définissons ensemble le périmètre du projet et les étapes adaptées." },
  { number: "03", title: "Réalisation", text: "Nous avançons étape par étape et faisons le point avec vous au fil du projet." },
];

export default function Service() {
  return (
    <div id="service" className="container my-5 px-3 py-2 md:py-3">
      <header className="mx-auto mb-5 max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-800">Ce que nous faisons</p>
        <h1 className="section-title poppins-semibold mb-3">Nos services digitaux</h1>
        <p className="mb-0 leading-7 text-secondary">
          Du site web au conseil, nous vous aidons à construire une présence numérique cohérente avec votre entreprise et vos ambitions.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map(({ title, Icon, intro, details, items }) => (
          <article key={title} className="service-card flex flex-col rounded border bg-white p-4 shadow-sm">
            <Icon aria-hidden="true" className="mb-3 text-5xl text-green-800" />
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>
            <p className="font-medium">{intro}</p>
            <p className="leading-7 text-secondary">{details}</p>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">Selon vos besoins</h3>
            <ul className="mb-0 flex flex-col gap-2 ps-4">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <section className="my-5 rounded bg-green-50 px-4 py-5 md:px-5" aria-labelledby="approche-title">
        <h2 id="approche-title" className="section-title poppins-semibold mb-4 text-center">Comment se déroule un projet ?</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map(({ number, title, text }) => (
            <article key={number} className="rounded bg-white p-4">
              <p className="mb-2 text-sm font-bold text-green-800">{number}</p>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mb-0 leading-7 text-secondary">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="py-3 text-center">
        <h2 className="mb-2 text-xl font-semibold">Un projet en tête ?</h2>
        <p className="mb-3 text-secondary">Présentez-nous votre besoin et échangeons sur les prochaines étapes.</p>
        <Link to="/contact" className="btn bg-green-800 text-light">Parler de mon projet</Link>
      </div>
    </div>
  );
}
