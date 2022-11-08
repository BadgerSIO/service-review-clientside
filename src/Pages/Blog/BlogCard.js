import React from "react";

const BlogCard = ({ blog }) => {
  const {
    blogTitle,
    blogImage,
    authorName,
    authorImage,
    list,
    published,
    description,
  } = blog;
  return (
    <div className="container my-10 ">
      <h1 className="text-3xl font-titles font-semibold mb-5 text-white">
        {blogTitle}
      </h1>
      <p className="mb-5">Published: {published}</p>
      <img src={blogImage} alt={blogTitle} className="w-2/4" />
      <div className="authorinfo my-5 flex items-center space-x-5 border-b pb-5">
        <img
          src={authorImage}
          alt={authorName}
          className="w-10 h-10 object-cover rounded-full"
        />
        <h3>{authorName}</h3>
      </div>
      <div className="descriptions border-b pb-5">
        <p className="text-xl leading-loose">{description}</p>
        {list ? (
          list.map((sl) => (
            <li key={sl} className="text-xl leading-loose">
              {sl}
            </li>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
