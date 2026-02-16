import React from "react";
import Logo from "../../common/Logo";
import { Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-light shadow-sm">
      <div>
        <div className="container flex flex-col gap-3 px-3 py-3 md:flex-row md:items-center md:justify-between md:py-2">
          <Logo logo={"Logo"} className={"text-xl font-bold text-green-700"} />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 list-none text-sm md:text-base">
            <a className="text-decoration-none text-dark" href="#accueil">
              Accueil
            </a>
            <a className="text-decoration-none text-dark" href="#service">
              Services
            </a>
            <a className="text-decoration-none text-dark" href="#apropos">
              <span className="uppercase">À</span> propos
            </a>
            <a className="text-decoration-none text-dark" href="#realisation">
              Réalisation
            </a>
            <a className="text-decoration-none text-dark" href="#contact">
              Contact
            </a>
            <Outlet />
          </div>
          <li className="list-none rounded bg-green-800 px-3 py-1.5 text-xs text-lime-50">
            Demander un devis
          </li>
        </div>
      </div>
    </div>
  );
}
