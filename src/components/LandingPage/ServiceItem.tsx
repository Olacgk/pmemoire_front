import React from "react";
import { Link } from "react-router-dom";

interface ServiceItemProps {
  icon: any;
  title: string;
  description: string;
  link: string;
  linkTitle?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
  link,
  linkTitle,
}) => (
  <div className="w-full">
    <div className="flex flex-col justify-center items-center text-center p-4 transition-transform transform hover:scale-105">
      <div className="flex-shrink-0 text-primary text-4xl mb-4">{icon}</div>
      <h5 className="mb-3">{title}</h5>
      <p>{description}</p>
      <Link className="btn btn-primary mt-auto mx-auto px-3 text-[#787878]" to={link} >
        {linkTitle ? linkTitle : "Lire la suite"}
      </Link>
    </div>
  </div>
);

export default ServiceItem;
