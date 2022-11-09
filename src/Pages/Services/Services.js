import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useTitle from "../../customHooks/useTitle";
import ServiceCard from "../Home/ServicesSec/ServiceCard";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  return (
    <div className="container">
      <div className="services grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Services;
