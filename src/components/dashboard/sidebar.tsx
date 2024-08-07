import { useEffect } from 'react'
import { useState } from "react";
import isiLogo from "../../assets/LOGO-NEW-GROUP.png";
import { Link, useLocation } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { BsFillCollectionFill, BsGrid1X2Fill, BsStack } from "react-icons/bs";

export default function SidebarDash() {
  const [isActive, setIsActive] = useState(() => {
    const savedIsActive = localStorage.getItem('isActive');
    return savedIsActive ? parseInt(savedIsActive, 10) : 1;
  });
  const location = useLocation();
  const {pathname} = location;

  const navigation = [
    { name: "Accueil", href: "", current: 1 , icon:<IoGrid />},
    { name: "Expert", href: "experts", current: 2, icon: <BsStack /> },
    { name: "Lecteurs", href: "lecteurs", current: 3, icon: <BsFillCollectionFill /> },
    { name: "Mémoire", href: "memoires", current: 4, icon: <BsGrid1X2Fill /> },
  ];

  useEffect(()=> {
    if(pathname === '/dashboard'){
      setIsActive(1)
    }
    localStorage.setItem('isActive', isActive.toString())
  },[isActive])

  return (
    <>
      <aside className="h-screen w-[20%] p-8 shadow-lg shadow-blue-gray-900/5 sticky flex flex-col items-center">
        <div className="flex items-center justify-center mb-12">
          <Link
            to="/"
            className="text-center hover:text-primary transition relative"
          >
            <div className="flex items-center gap-2">
              <img
                src={isiLogo}
                alt="Logo ISI"
                style={{ width: "60px", height: "auto" }}
              />
              <p className="text-lg w-10 text-[#041f4e] font-bold">
                {" "}
                Partage Mémoire
              </p>
            </div>
          </Link>
        </div>
        <nav className="flex flex-col space-y-5 w-full">
          {navigation.map((item) => (
            <Link
              to={item.href}
              onClick={()=>setIsActive(item.current)}
              className={`${
                isActive === item.current
                  ? "bg-[#041f4e] text-white"
                  : "text-gray-700 hover:bg-gray-300 hover:text-[#041f4e]"
              } rounded-md px-8 py-2 text-lg font-medium w-full text-center`}
            >
              <div className="flex gap-4 items-center">
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
          {/* <Link to="experts"> Expert</Link> */}
        </nav>
      </aside>
    </>
  );
}
