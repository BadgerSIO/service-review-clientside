import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useTitle from "../../customHooks/useTitle";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = useLoaderData();
  useTitle("Blog");
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
