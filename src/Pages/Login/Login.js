import React, { useContext, useState } from "react";
import { FaCog, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../customHooks/useTitle";
const Login = () => {
  const { googleSignUp, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  useTitle("Login");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

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
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
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
              setLoading(false);
              localStorage.setItem("pmToken", data?.token);
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => {
        setLoading(false);
        setErrors(`${err}`);
        console.log(err);
      });
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
              Please Login Here
            </h1>
            <input
              type="email"
              name="email"
              className="py-2 px-3 border w-full"
              placeholder="Type your Email"
            />
            <input
              type="password"
              name="password"
              className="py-2 px-3 border w-full my-10"
              placeholder="Type your Password"
            />
            <button className="w-full border py-2 hover:bg-black/50">
              Login
            </button>

            {errors ? (
              <p className="text-red-500 text-center">
                <small>{errors}</small>
              </p>
            ) : (
              <></>
            )}
          </form>
          <p className="text-center py-5 font-titles">OR</p>
          <button
            onClick={handleGoogle}
            className="flex items-center justify-center mx-auto border py-2 px-4 hover:bg-black/50"
          >
            <FaGoogle className="mr-3" /> Signup with Google
          </button>
          <p className="text-center pt-5">
            Not registered?{" "}
            <Link to="/register" className="text-white hover:text-primary">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    );
  }
};

export default Login;
