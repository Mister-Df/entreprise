import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import Logo from "../../common/Logo";

const navigationLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Partenaires", to: "/partenaires" },
  { label: "Questions fréquentes", to: "/faq" },
];

const serviceLinks = [
  { label: "Développement Web", to: "/services" },
  { label: "Marketing Digital", to: "/services" },
  { label: "Conseil & accompagnement", to: "/services" },
];

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-decoration-none text-green-100 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-green-950 text-light">
      <div className="container px-3">
        <div className="grid grid-cols-1 gap-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-8">
          <div>
            <Link to="/" className="mb-3 inline-block text-decoration-none text-light">
              <Logo logo="Dev" className="text-2xl amatic-sc-regular font-bold tracking-wide" />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-green-100">
              Des solutions digitales pensées pour accompagner les entreprises dans leurs projets et leur présence en ligne.
            </p>
            <a href="mailto:contactcom15@gmail.com" className="mt-2 inline-flex items-center gap-2 text-decoration-none text-light">
              <FiMail aria-hidden="true" />
              <span>contactcom15@gmail.com</span>
            </a>
          </div>

          <nav aria-label="Navigation de pied de page">
            <h2 className="mb-3 text-base font-semibold">Découvrir</h2>
            <ul className="mb-0 flex list-none flex-col gap-2 p-0 text-sm">
              {navigationLinks.map(({ label, to }) => <FooterLink key={label} to={to}>{label}</FooterLink>)}
            </ul>
          </nav>

          <nav aria-label="Services proposés">
            <h2 className="mb-3 text-base font-semibold">Nos services</h2>
            <ul className="mb-0 flex list-none flex-col gap-2 p-0 text-sm">
              {serviceLinks.map(({ label, to }) => <FooterLink key={label} to={to}>{label}</FooterLink>)}
            </ul>
          </nav>

          <div className="rounded border transition-all duration-3000 ease-in-out hover:-translate-y-2 hover:shadow-lg border-green-800 bg-green-900 p-4">
            <h2 className="mb-2 text-base font-semibold">Un projet à discuter ?</h2>
            <p className="mb-3 text-sm leading-6 text-green-100">
              Dites-nous ce que vous souhaitez mettre en place et nous échangerons sur vos besoins.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded bg-white px-3 py-2 text-sm font-semibold text-green-950 text-decoration-none hover:bg-green-100">
              Contactez-nous <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-green-800 py-3 text-center text-xs text-green-100 sm:flex-row sm:text-left">
          <p className="mb-0">© {new Date().getFullYear()} — Tous droits réservés.</p>
          <Link to="/contact" className="text-decoration-none text-green-100 hover:text-white">Nous contacter</Link>
        </div>
      </div>
    </footer>
  );
}
