import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Blog;
