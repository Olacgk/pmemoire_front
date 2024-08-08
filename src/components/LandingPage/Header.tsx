//import React from 'react'
import { useState } from "react";
import isiLogo from "../../assets/LOGO-NEW-GROUP.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaPhone } from "react-icons/fa";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <header className="py-4 px-4 shadow-md w-full sticky top-0 flex justify-center bg-white z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="text-center hover:text-primary transition relative"
            >
              <div className="flex items-center gap-2">
                <img
                  src={isiLogo}
                  alt="Logo ISI"
                  style={{ width: "80px", height: "auto" }}
                />
                <p className="text-lg w-10 font-medium text-[#041f4e]"> Partage Mémoire</p>
              </div>
            </Link>
          </div>
          <div className="flex gap-8 items-center justify-center bg-[#f2f5f9] px-16 py-4 rounded-lg text-base">
            <Link
              to="/"
              className="focus:text-[#041f4e] focus:font-semibold "
            >
              Accueil
            </Link>
            <Link
              to="#"
              className="focus:text-[#041f4e] focus:font-semibold "
            >
              A propos de
            </Link>
            <div className="nav-item dropdown" >
              <span
                className="focus:text-[#041f4e] focus:font-semibold cursor-pointer flex items-center gap-1"
                onMouseEnter={handleMouseEnter}
              >
                <p>Groupe ISI</p>
              {!dropdownOpen && <FaAngleDown className="text-[#041f4e]" aria-hidden="true" />}
              </span>
              {dropdownOpen && (
                <div
                  className="absolute z-10 mt-6 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none justify-items-center"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="https://www.groupeisi.com/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-0"
                    tabIndex={-1}
                  >
                    Présentation
                  </Link>
                  <Link
                    to="https://www.groupeisi.com/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-1"
                    tabIndex={-1}
                  >
                    Mot du PDG
                  </Link>
                  <Link
                    to="https://www.groupeisi.com/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-2"
                    tabIndex={-1}
                  >
                    Administration
                  </Link>
                  <Link
                    to="https://www.groupeisi.com/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-3"
                    tabIndex={-1}
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            <div>
              <Link to="/login">Se connecter</Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="bg-[#f2f5f9] rounded-full p-4 hover:bg-[#041f4e]"
              data-wow-delay=".9s"
            >
              <FaPhone className="text-[#041f4e] hover:text-white"/>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Nous Contacter</span>
              <a href="#">
                <span className="text-black">+221 33 822 19 81</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
