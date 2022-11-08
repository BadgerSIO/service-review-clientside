import React from "react";
import BlogSec from "./BlogSec/BlogSec";
import Hero from "./Hero/Hero";
import ServicesSec from "./ServicesSec/ServicesSec";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ServicesSec></ServicesSec>
      <BlogSec></BlogSec>
    </div>
  );
};

export default Home;
