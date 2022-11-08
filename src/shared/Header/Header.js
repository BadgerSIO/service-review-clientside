import React from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { FaUser, IconName } from "react-icons/fa";
const Header = () => {
  const user = {
    email: "",
  };
  const navlinks = (
    <>
      <li className="capitalize">
        <NavLink to="/services">services</NavLink>
      </li>

      <li className="capitalize">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  const userProf = (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div className="navbar container bg-base-100 py-5 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="font-title border-2 font-bold   p-2 text-xl">
          Precision Law
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 space-x-3">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          userProf
        ) : (
          <>
            <Link to="/login">
              <button className="py-2 px-3 border flex items-center justify-center capitalize">
                <FaUser className="mr-2"></FaUser>login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;