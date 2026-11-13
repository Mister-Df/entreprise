import React from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "Quels types de projets accompagnez-vous ?",
    answer: "Nous accompagnons les entreprises dans la création de sites web, leur visibilité en ligne et leurs projets de conseil digital.",
  },
  {
    question: "Comment se déroule un premier échange ?",
    answer: "Vous nous présentez votre activité, vos besoins et vos objectifs. Nous échangeons ensuite sur une approche adaptée à votre projet.",
  },
  {
    question: "Pouvez-vous adapter l’accompagnement à notre entreprise ?",
    answer: "Oui. Le périmètre se définit selon vos priorités, vos ressources et les résultats que vous souhaitez atteindre.",
  },
  {
    question: "Que faut-il préparer avant de vous contacter ?",
    answer: "Quelques informations sur votre activité, votre besoin et vos objectifs sont utiles. Vous pouvez aussi nous écrire si votre idée est encore en cours de réflexion.",
  },
  {
    question: "Pouvez-vous créer un site adapté aux mobiles ?",
    answer: "L’adaptation aux différents formats d’écran fait partie des éléments à prendre en compte pour la création d’un site web.",
  },
  {
    question: "Proposez-vous du conseil sans création de site ?",
    answer: "Oui. Vous pouvez nous solliciter pour discuter de votre communication numérique ou clarifier vos priorités digitales.",
  },
  {
    question: "Comment demander un devis ?",
    answer: "Écrivez-nous en décrivant brièvement votre projet. Nous pourrons préciser vos besoins et le périmètre de la demande avant d’établir une proposition.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="container my-5 px-3" aria-labelledby="faq-title">
      <header className="mx-auto mb-4 max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-800">Besoin d’informations ?</p>
        <h1 id="faq-title" className="section-title poppins-semibold mb-3">Questions fréquentes</h1>
        <p className="mb-0 leading-7 text-secondary">Retrouvez quelques réponses aux questions que l’on peut se poser avant de lancer un projet digital.</p>
      </header>
      <div className="mx-auto flex max-w-3xl flex-col gap-2">
        {questions.map(({ question, answer }) => (
          <details key={question} className="faq-item rounded border transition-all duration-1500 ease-in-out hover:-translate-y-2 hover:shadow-lg bg-white px-3 py-2">
            <summary className="cursor-pointer py-2 font-semibold">{question}</summary>
            <p className="mb-2 leading-7 text-secondary">{answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-4 text-center">
        Une autre question ?{" "}
        <Link className="font-semibold text-green-800" to="/contact">Parlons de votre projet</Link>.
      </p>
    </section>
  );
}
