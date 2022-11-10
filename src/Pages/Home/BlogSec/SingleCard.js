import React from "react";

const SingleCard = ({ blog }) => {
  const { blogTitle, blogImage, description } = blog;
  return (
    <div className="card w-full bg-base-100 border border-borderTheme">
      <figure className="w-full">
        <img
          src={blogImage}
          alt="blogTitle"
          className="w-full h-72 md:h-80 object-cover"
        />
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
