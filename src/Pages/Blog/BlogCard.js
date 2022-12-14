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
    <div className="container my-10 px-2 ">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-titles font-semibold mb-5 text-white">
        {blogTitle}
      </h1>
      <p className="mb-5">Published: {published}</p>
      <img src={blogImage} alt={blogTitle} className="w-full lg:w-2/4" />
      <div className="authorinfo my-5 flex items-center space-x-5 border-b border-b-borderTheme pb-5">
        <img
          src={authorImage}
          alt={authorName}
          className="w-10 h-10 object-cover rounded-full"
        />
        <h3>{authorName}</h3>
      </div>
      <div className="descriptions border-b border-b-borderTheme pb-5">
        <p className="text-lg lg:text-xl leading-loose">{description}</p>
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
