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
            {/* <Link to={'/home'} className="text-decoration-none text-dark">Accueil</Link> */}
            <a className="text-decoration-none text-dark" href="#accueil">Accueil</a>
            <a className="text-decoration-none text-dark" href="#service">Services</a>
            <a className="text-decoration-none text-dark" href="#apropos"><span className=" uppercase">à</span> propos</a>
            <a className="text-decoration-none text-dark" href="#realisation">Réalisation</a>
            <a className="text-decoration-none text-dark" href="#contact">Contact</a>
            {/* <Link  to={'/home/service'}className="text-decoration-none text-dark">Services</Link> */}
            {/* <Link to={'/'} className="text-decoration-none text-dark"><span className=" uppercase">à</span> propos</Link> */}
            {/* <Link to={'/'} className="text-decoration-none text-dark">Réalisation</Link> */}
            {/* <Link to={'/'} className="text-decoration-none text-dark">Contact</Link> */}
            <Outlet />
          </div>
          <li className=" list-none text-xs text-lime-50 bg-green-800 rounded py-1 px-2">
            Demander un devis
          </li>
        </div>
      </div>
    </div>
  );
}
