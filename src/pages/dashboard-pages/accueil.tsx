// import React from "react";

export default function Accueil() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-center">
        <h3 className="font-extrabold text-lg">Bibliothèque Numérique</h3>
      </div>
      <div className="p-5 mx-auto w-4/5 max-w-xl bg-gray-100 border border-gray-300 rounded-lg shadow-md text-sm leading-loose text-gray-800">
        <p className="mt-0 mb-5 font-normal">
          La bibliothèque numérique comprend plusieurs collections de documents:
        </p>
        <ul className="m-0 pl-5">
          <li className="mb-3">
            Les{" "}
            <a
              href="#"
              className="text-blue-600 no-underline font-bold"
            >
              thèses
            </a>{" "}
            et les{" "}
            <a
              href="#"
              className="text-blue-600 no-underline font-bold"
            >
              mémoires
            </a>{" "}
            .
          </li>
          <li className="mb-3">
            Des{" "}
            <a
              href="#"
              className="text-blue-600 no-underline font-bold"
            >
              articles
            </a>{" "}
            publiés par les enseignants et chercheurs de l'Université.
          </li>
          <li className="mb-3">
            Des{" "}
            <a
              href="#"
              className="text-blue-600 no-underline font-bold"
            >
              publications
            </a>{" "}
            de l'Université.
          </li>
          <li>
            Des{" "}
            <a
              href="#"
              className="text-blue-600 no-underline font-bold"
            >
              ouvrages rares et précieux
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}
