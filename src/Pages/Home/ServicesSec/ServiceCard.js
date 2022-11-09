import React from "react";

const ServiceCard = ({ service }) => {
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
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="w-full">
        <img
          src={serviceImage}
          alt={serviceName}
          className="w-full h-72 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>
          {serviceDescription.length > 5
            ? serviceDescription.substr(0, 100) + "..."
            : serviceDescription}
        </p>
        <p className="text-white">
          <small>
            {" "}
            Firm name: <span className="text-sky-400">{firmName}</span>
          </small>
        </p>
        <div className="card-actions justify-between items-end">
          <h3 className="text-2xl">${servicePrice}</h3>
          <button className="btn btn-primary capitalize">view details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
