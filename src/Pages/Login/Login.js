import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../customHooks/useTitle";
const Login = () => {
  const { googleSignUp, login } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Login");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleSignUp()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-[83vh] container flex items-center justify-center">
      <div className="w-[500px]">
        <form onSubmit={handleSubmit} className="w-full border p-10">
          <h1 className="text-3xl pb-10 font-titles font-bold">Login Here</h1>
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
};

export default Login;
