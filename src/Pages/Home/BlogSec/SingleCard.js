import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ blog }) => {
  const { blogTitle, blogImage, description } = blog;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={blogImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blogTitle}</h2>
        <p>
          {description?.length > 100 ? description.slice(0, 100) : description}
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default SingleCard;
