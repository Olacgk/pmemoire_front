import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FilterComponent = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Tout");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="flex justify-center items-center p-5 bg-[#041f4eb4] bg-opacity-10 rounded-lg w-3/4 mx-auto">
      <div className="flex flex-col gap-4 w-full">
        <ul className="flex flex-wrap justify-center gap-3 list-none p-0 m-0">
          {["Tout", "Licence", "Master", "Doctorat", "Livres"].map((filter) => (
            <li key={filter}>
              <button
                className={`px-5 py-2.5 bg-blue-500 text-white border-none rounded-md cursor-pointer transition-colors ${
                  activeFilter === filter ? "bg-[#041f4e]" : ""
                } hover:bg-blue-700`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Saisir les termes de recherche..."
            className="py-3 px-3 pr-10 border-none rounded-md w-full text-lg shadow-sm "
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-none border-none cursor-pointer text-[#041f4e]">
            <FaSearch size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
