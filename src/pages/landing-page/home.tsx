import { FaBookOpen, FaHeadset, FaUserTie } from "react-icons/fa";
import Caroussel from "../../components/LandingPage/Caroussel";
import FilterComponent from "../../components/LandingPage/SearchBarFilter";
import ServiceItem from "../../components/LandingPage/ServiceItem";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col space-y-4">
        <Caroussel />
        <FilterComponent />
        <div className="w-full m-auto flex flex-col justify-center items-center">
          <div
            className="text-center pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-0 text-4xl font-medium text-[#16243d]">
              Bienvenue à votre bibliothèque numérique
            </h1>
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-6">
            <ServiceItem
              title="Présentation du Groupe ISI"
              description="Le Groupe ISI met à votre disposition une bibliothèque numérique pour faciliter le partage de vos thèses et mémoires."
              icon={<FaUserTie color="#787878"/>}
              link="/"
            />
            <ServiceItem
              title="Nos Thèses & Mémoires"
              description="Accédez à un large choix de thèses et mémoires de différents domaines et spécialités."
              icon={<FaBookOpen color="#787878"/>}
              link="/"
            />
            <ServiceItem
              title="Assistance"
              description="Notre équipe est disponible pour vous accompagner et répondre à vos questions."
              icon={<FaHeadset color="#787878"/>}
              link="/"
              linkTitle="Contactez-nous"
            />
          </div>
        </div>
      </div>
    </>
  );
}
