import React, { useContext } from "react";
import { FaCog } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../customHooks/useTitle";
import BlogSec from "./BlogSec/BlogSec";
import Hero from "./Hero/Hero";
import ServicesSec from "./ServicesSec/ServicesSec";

const Home = () => {
  useTitle("Home");
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[83vh] container flex items-center justify-center">
        <FaCog className="animate-spin text-5xl text-white"></FaCog>
      </div>
    );
  }
  if (user && user.uid) {
    return (
      <div>
        <Hero></Hero>
        <ServicesSec></ServicesSec>
        <BlogSec></BlogSec>
      </div>
    );
  }
};

export default Home;
