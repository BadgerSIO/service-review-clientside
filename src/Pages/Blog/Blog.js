import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
      <ScrollRestoration />
    </div>
  );
};

export default Blog;
