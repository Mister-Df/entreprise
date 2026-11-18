import React, { useState } from "react";
import axios from "axios";

const contactEmail = "fouscocom15@gmail.com";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [adresseEmail, setAdresseEmail] = useState("");
  const [sujetDemande, setSujetDemande] = useState("Autre demande");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const request = axios.post(`${import.meta.env.VITE_API_URL}/avis/create-post`, {
        userName: userName,
        adresseEmail: adresseEmail,
        sujetDemande: sujetDemande,
        message: message,
      });
      if (request.status === 200) {
        alert("Votre message a été envoyé avec succès !");
        setUserName("");
        setAdresseEmail("");
        setSujetDemande("Autre demande");
        setMessage("");
      } 
    }
    catch (error) {
        console.error("Erreur lors de l'envoi du message :", error);
      }

    }



  return (
      <div id="contact" className="container my-5 px-3 py-2">
        <header className="mx-auto mb-5 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-800">Parlons de vos objectifs</p>
          <h1 className="section-title poppins-semibold mb-3">Contactez-nous</h1>
          <p className="mb-0 leading-7 text-secondary">
            Présentez-nous votre besoin, même s’il est encore en réflexion. Nous pourrons échanger sur les prochaines étapes et le type d’accompagnement adapté.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <section className="rounded bg-green-800 p-4 text-light lg:col-span-2" aria-labelledby="contact-info-title">
            <h2 id="contact-info-title" className="mb-3 text-xl font-semibold">Échangeons sur votre projet</h2>
            <p className="leading-7 text-green-50">Un premier message nous aidera à comprendre votre activité et ce que vous cherchez à accomplir.</p>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide">Écrivez-nous</h3>
            <a className="text-light underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide">Pour préparer l’échange</h3>
            <ul className="flex flex-col gap-2 ps-4 text-green-50">
              <li>Le contexte de votre entreprise</li>
              <li>Votre besoin ou votre idée</li>
              <li>Vos objectifs et vos priorités</li>
            </ul>
          </section>

          <form onSubmit={handleSubmit} className="rounded border bg-white p-4 shadow-sm lg:col-span-3">
            <h2 className="mb-3 text-xl font-semibold">Décrivez votre demande</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="form-label">Nom</label>
                <input id="contact-name" value={userName} onChange={(e) => setUserName(e.target.value)} name="name" className="form-control" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="contact-email" className="form-label">Adresse e-mail</label>
                <input id="contact-email" value={adresseEmail} onChange={(e) => setAdresseEmail(e.target.value)} name="email" type="email" className="form-control" autoComplete="email" required />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="contact-service" className="form-label">Sujet de votre demande</label>
              <select id="contact-service" value={sujetDemande} onChange={(e) => setSujetDemande(e.target.value)} name="service" className="form-select" defaultValue="Autre demande">
                <option>Développement Web</option>
                <option>Marketing Digital</option>
                <option>Conseil & accompagnement</option>
                <option>Partenariat</option>
                <option>Autre demande</option>
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="contact-message" className="form-label">Votre message</label>
              <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="form-control" rows="5" placeholder="Quelques lignes sur votre projet…" required />
            </div>
            <button type="submit" className=" flex items-center h-8 rounded-2 justify-center w-100 mt-3 bg-green-800 text-white">Envoyer</button>
            <p className="mb-0 mt-2 text-sm text-secondary">Le bouton ouvrira votre application de messagerie avec votre demande préremplie.</p>
          </form>
        </div>
      </div>
    );
  }

  