import { Input } from "antd";

export default function Home() {

    const { Search } = Input;
  return (
    <>
      <div className="bg-homeBg bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="bg-[#041f4e9d] rounded-lg p-4 flex justify-between items-center w-[70%] h-auto flex-col gap-8">
          <div>
            <ul className="flex items-center justify-between">
              <li>
                <button className="p-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600 focus:outline-none">
                  Tout
                </button>
              </li>
              <li>
                <button className="p-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600 focus:outline-none">
                  Licence
                </button>
              </li>
              <li>
                <button className="p-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600 focus:outline-none">
                  Master
                </button>
              </li>
              <li>
                <button className="p-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600 focus:outline-none">
                  Doctorat
                </button>
              </li>
            </ul>
          </div>
            <Search allowClear placeholder="Entrez le thème..." style={{height: "48px"}}/>
        </div>
      </div>
    </>
  );
}
