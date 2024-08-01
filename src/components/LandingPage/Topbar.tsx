import { useState } from "react";
import {
  FaAngleDown,
  FaEnvelope,
  FaFacebook,
  FaGlobeAfrica,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="bg-[#f2f5f9] w-full py-2 hidden lg:block px-10">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-3 lg:space-x-0 lg:w-2/3 text-center lg:text-left mb-4 lg:mb-0">
          <div className="flex gap-2 items-center border-r-2 border-[#041f4e] pr-3">
            <a href="#" className="text-muted text-sm flex gap-2 items-center">
              <FaMapMarkerAlt className="text-[#041f4e]" />
              Km1 avenue cheikh Anta DIOP
            </a>
          </div>
          <div className="pl-3">
            <a
              href="mailto:contact@groupeisi.com"
              className="text-muted text-sm gap-2 flex items-center"
            >
              {/* <i className="fas fa-envelope text-[#041f4e] mr-2"></i> */}
              <FaEnvelope className="text-[#041f4e]" />
              contact@groupeisi.com
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 text-center lg:text-right">
          <div className="flex justify-end space-x-3">
            <div className="flex gap-2 items-center border-r border-primary pr-3">
              <a className="text-[#041f4e] p-0 mr-3" href="#">
                <FaFacebook />
              </a>
              <a className="text-[#041f4e] p-0 mr-3" href="#">
                <FaXTwitter />
              </a>
              <a className="text-[#041f4e] p-0 mr-3" href="#">
                <FaInstagram />
              </a>
              <a className="text-[#041f4e] p-0" href="#">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="relative ml-3">
              <div
                className="flex gap-2 items-center justify-center"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                <div className="text-dark flex gap-2 items-center">
                  <FaGlobeAfrica className="text-[#041f4e]" />
                  <small>Français</small>
                </div>
                {!dropdownOpen && <FaAngleDown className="text-[#041f4e]" aria-hidden="true" />}
              </div>
              {dropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="menu-item-0"
                      tabIndex={-1}
                    >
                      Anglais
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="menu-item-1"
                      tabIndex={-1}
                    >
                      Espagnol
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="menu-item-2"
                      tabIndex={-1}
                    >
                      Italien
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
