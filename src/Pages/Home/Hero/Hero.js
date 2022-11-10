import React from "react";
import { FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container lg:h-[700px] flex items-center border-b border-b-borderTheme ">
      <div>
        <h3 className="uppercase text-lg">WE ARE HERE TO SERVE</h3>
        <h1 className="text-6xl font-titles mb-5 leading-snug">
          Find the Best law firm<br></br> in the town
        </h1>
        <div className="grid grid-cols-3 mt-5 mb-10">
          <div className="space-y-3">
            <h2 className="text-5xl font-titles">9</h2>
            <p className="text-lg">Areas of Specialization</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-5xl font-titles">10</h2>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-5xl font-titles">50+</h2>
            <p className="text-lg">Clients Served</p>
          </div>
        </div>
        <Link className="inline-block" to="/services">
          <button className="text-white  p-3 border  text-xl flex items-center justify-center hover:bg-black/50">
            <FaCogs className="mr-3"></FaCogs> Explore Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
