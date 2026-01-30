import React from "react";
import Logo from "../../common/Logo";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-light ">
      <div>
        <div className="flex container items-center justify-between py-2 px-3">
          <Logo logo={"Logo"} className={" text-xl text-green-700 font-bold "} />
          <div className="flex justify-between list-none gap-3">
            <Link to={'/home'} className="text-decoration-none text-dark">Accueil</Link>
            <Link  to={'/home/service'}className="text-decoration-none text-dark">Services</Link>
            <Link to={'/'} className="text-decoration-none text-dark"><span className=" uppercase">à</span> propos</Link>
            <Link to={'/'} className="text-decoration-none text-dark">Réalisation</Link>
            <Link to={'/'} className="text-decoration-none text-dark">Contact</Link>
            <Outlet />
          </div>
          <li className=" list-none text-lime-50 bg-green-800 rounded py-1 px-2">
            Demander un devis
          </li>
        </div>
      </div>
    </div>
  );
}
