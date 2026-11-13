import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";

export default function NavBar() {
  return (
    <header className="bg-light fixed-top shadow-sm">
      <div className="container flex flex-col gap-3 px-3 py-3 md:flex-row md:items-center md:justify-between md:py-2">
        <Link to="/" className="text-decoration-none">
          <Logo logo="Dev " className="text-xl amatic-sc-regular font-bold text-green-700" />
        </Link>
        <nav aria-label="Navigation principale" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-md">
          <Link className="text-decoration-none hover:underline text-dark" to="/">Accueil</Link>
          <Link className="text-decoration-none text-dark" to="/services">Services</Link>
          <Link className="text-decoration-none text-dark" to="/a-propos">À propos</Link>
          <Link className="text-decoration-none text-dark" to="/realisations">Réalisations</Link>
          <Link className="text-decoration-none text-dark" to="/partenaires">Partenaires</Link>
          <Link className="text-decoration-none text-dark" to="/faq">FAQ</Link>
          <Link className="text-decoration-none text-dark" to="/contact">Contact</Link>
        </nav>
        <Link to="/contact" className="rounded bg-green-800 hover:bg-green-100 hover:text-green-800 px-3 py-1.5 text-center text-xs text-white">
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
