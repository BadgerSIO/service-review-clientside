import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import ServiceCard from "./ServiceCard";

const ServicesSec = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://precision-law-server.vercel.app/lastServices`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [user?.email]);
  return (
    <div className="py-5 lg:py-20 container border-b border-b-borderTheme">
      <h1 className="text-3xl  lg:text-5xl font-titles ">
        Our Service area includes
      </h1>
      <div className="services grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link className="inline-block " to="/services">
          <button className="text-white p-2 md:p-3 border text-base  md:text-xl flex items-center justify-center hover:bg-black/50">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSec;
