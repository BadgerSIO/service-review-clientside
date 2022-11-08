import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[83vh] container flex items-center justify-center">
      <div className="w-[500px]">
        <form className="w-full border p-10">
          <h1 className="text-3xl pb-10 font-titles font-bold">
            Register Here
          </h1>
          <input
            type="name"
            name="name"
            className="py-2 px-3 border w-full mb-5"
            placeholder="Type your Displayname"
          />
          <input
            type="url"
            name="photo"
            className="py-2 px-3 border w-full mb-5"
            placeholder="Paste your photoUrl"
          />
          <input
            type="email"
            name="email"
            className="py-2 px-3 border w-full mb-5"
            placeholder="Type your Email"
          />
          <input
            type="password"
            name="password"
            className="py-2 px-3 border w-full mb-10"
            placeholder="Type your Password"
          />
          <button className="w-full border py-2 hover:bg-black/50">
            Register
          </button>
        </form>
        <p className="text-center py-5 font-titles">OR</p>
        <button className="flex items-center justify-center mx-auto border py-2 px-4 hover:bg-black/50">
          <FaGoogle className="mr-3" /> Signup with Google
        </button>
        <p className="text-center pt-5">
          Already registered?{" "}
          <Link to="/login" className="text-white hover:text-primary">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
