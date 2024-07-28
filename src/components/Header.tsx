//import React from 'react'
import isiLogo from "../assets/LOGO-NEW-GROUP.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="sticky top-0 w-full flex justify-center">
        <header className="py-4 px-4 shadow-md bg-[#041f4eef] w-[80%] text-white rounded-b-lg">
          <div className="container flex items-center justify-between">
            <div className="flex items-center justify-center">
              <Link
                to="/"
                className="text-center hover:text-primary transition relative"
              >
                <div
                    className="flex items-center gap-2"
                >
                  <img
                    src={isiLogo}
                    alt="Logo ISI"
                    style={{ width: "80px", height: "auto" }}
                  />
                  <p className="text-lg w-10"> Partage Mémoire</p>
                </div>
              </Link>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li><Link to="">A propos</Link></li>
                    <li><Link to="">Contact</Link></li>
                    <li> <Link to="https://groupeisi.com">Groupe ISI</Link></li>
                </ul>
            </div>
            <div>
                <Link to="/login">Se connecter</Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
