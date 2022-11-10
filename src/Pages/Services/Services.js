import { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useTitle from "../../customHooks/useTitle";
import ServiceCard from "../Home/ServicesSec/ServiceCard";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (services) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }
  }, [services]);
  if (loading) {
    return (
      <div className="h-[83vh] container flex items-center justify-center">
        <FaCog className="animate-spin text-5xl text-white"></FaCog>
      </div>
    );
  } else {
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
  }
};

export default Services;
