import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

const BlogSec = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((data) => {
        return setBlogs(data);
      });
  }, []);
  return (
    <div className="py-20 container">
      <h1 className="text-5xl font-titles mb-10">Our Blogs</h1>
      <div className="grid lg:grid-cols-3 lg:gap-5 mt-5">
        {blogs.map((blog) => (
          <SingleCard key={blog._id} blog={blog}></SingleCard>
        ))}
      </div>
      <Link to="/blog">
        <button className="text-white  py-3 px-4 border  text-xl flex items-center justify-center hover:bg-black/50 mt-5 mx-auto">
          See all
        </button>
      </Link>
    </div>
  );
};

export default BlogSec;
