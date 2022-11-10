import React, { useContext, useState } from "react";
import { FaCog, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../customHooks/useTitle";

const Register = () => {
  const { googleSignUp, createuser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useTitle("Register");
  const handleGoogle = () => {
    setLoading(true);
    googleSignUp()
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        // get jwt token

        fetch(`https://precision-law-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data) {
              localStorage.setItem("pmToken", data?.token);
              setLoading(false);
              navigate("/");
            }
          });
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const uname = form.name.value;
    const uphoto = form.photo.value;

    createuser(email, password, uname, uphoto)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  if (loading) {
    return (
      <div className="h-[83vh] container flex items-center justify-center">
        <FaCog className="animate-spin text-5xl text-white"></FaCog>
      </div>
    );
  } else {
    return (
      <div className="min-h-[83vh] container flex items-center justify-center px-2">
        <div className="w-full sm:w-[500px]">
          <form onSubmit={handleSubmit} className="w-full border p-10">
            <h1 className="text-xl md:text-3xl pb-5 sm:pb-10 font-titles font-bold">
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
          <button
            onClick={handleGoogle}
            className="flex items-center justify-center mx-auto border py-2 px-4 hover:bg-black/50"
          >
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
  }
};

export default Register;
