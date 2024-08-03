// import React from 'react'

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 bottom-0 w-px bg-gray-200 left-[20%] after:content-[''] after:absolute after:top-0 after:left-[-0.5px] after:transform after:-translate-y-[160px] after:h-[160px] after:w-[2px] after:bg-green-400 after:animate-drop-3s-02s"></div>
        <div className="absolute top-0 bottom-0 w-px bg-gray-200 left-[40%] after:content-[''] after:absolute after:top-0 after:left-[-0.5px] after:transform after:-translate-y-[160px] after:h-[160px] after:w-[2px] after:bg-green-400 after:animate-drop-2s-07s"></div>
        <div className="absolute top-0 bottom-0 w-px bg-gray-200 left-[60%] after:content-[''] after:absolute after:top-0 after:left-[-0.5px] after:transform after:-translate-y-[160px] after:h-[160px] after:w-[2px] after:bg-green-400 after:animate-drop-3s-09s"></div>
        <div className="absolute top-0 bottom-0 w-px bg-gray-200 left-[80%] after:content-[''] after:absolute after:top-0 after:left-[-0.5px] after:transform after:-translate-y-[160px] after:h-[160px] after:w-[2px] after:bg-green-400 after:animate-drop-2s-12s"></div>
      </div>
      <div className="max-w-[520px] w-full text-center mx-auto">
        <div className="h-[210px] leading-[210px]">
          <h1 className="font-oswald text-[188px] font-bold m-0 text-shadow-4px-4px-green-400">
            404
          </h1>
        </div>
        <h2 className="font-oswald text-[42px] font-bold m-0 uppercase tracking-[1.6px]">
          Page non trouvée
        </h2>
        <p className="font-lato text-black font-normal mt-[20px] mb-[25px]">
          La page que vous recherchez a peut-être été supprimée, son nom a
          changé ou elle est temporairement indisponible.
        </p>
        {/* <Link
          to=""
          className="font-lato py-[10px] px-[30px] inline-block text-black font-normal uppercase shadow-[0px_0px_0px_2px_black,2px_2px_0px_2px_green-400] no-underline transition-all duration-200"
        >
          Homepage
        </Link> */}
      </div>
    </div>
  );
}
