import React from "react";

const RevCard = ({ review }) => {
  const { authorImage, authorName, reviewtxt, serviceName } = review;
  return (
    <div className="card w-full bg-base-100 border border-borderTheme">
      <figure className="w-full">
        <img
          src={
            authorImage
              ? authorImage
              : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          }
          alt={authorName}
          className="w-full h-80 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-sm text-sky-500">Service: {serviceName}</h3>
        <h2 className="card-title">{authorName}</h2>
        <p>{reviewtxt?.length > 100 ? reviewtxt.slice(0, 100) : reviewtxt}</p>
        <div className="card-actions justify-start"></div>
      </div>
    </div>
  );
};

export default RevCard;
