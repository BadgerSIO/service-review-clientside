import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const service = useLoaderData();
  const {
    serviceName,
    servicePrice,
    serviceImage,
    serviceDescription,
    firmName,
    author,
    _id,
  } = service;
  return (
    <div className="container py-5">
      <div>
        <h1 className="text-2xl md:text-6xl font-titles text-white mb-5">
          {serviceName}
        </h1>
        <h3 className="text-xl">
          Firm Name: <span className="text-sky-400">{firmName}</span>
        </h3>
        <img
          src={serviceImage}
          alt=""
          className="w-full md:w-4/6 max-h-[500px] object-cover mt-5 mb-10"
        />
        <p className="text-2xl leading-relaxed">{serviceDescription}</p>
        <h6 className="my-5 text-xl">Service Charge: ${servicePrice}</h6>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ServiceDetail;
