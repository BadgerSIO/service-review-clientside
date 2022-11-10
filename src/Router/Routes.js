import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/MyReviews/UpdateReview";
import Register from "../Pages/Register/Register";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        loader: () =>
          fetch(`https://precision-law-server.vercel.app/allServices`),
        element: <Services></Services>,
      },
      {
        path: "/servicedetail/:id",
        loader: async ({ params }) =>
          fetch(`https://precision-law-server.vercel.app/sdetail/${params.id}`),
        element: <ServiceDetail></ServiceDetail>,
      },
      {
        path: "/blog",
        loader: async () =>
          fetch(`https://precision-law-server.vercel.app/blogs`),
        element: <Blog></Blog>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: async ({ params }) =>
          fetch(
            `https://precision-law-server.vercel.app/singleReview/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>404 not found</div>,
  },
]);

export default routes;
