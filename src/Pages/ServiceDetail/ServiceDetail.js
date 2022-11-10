import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import useTitle from "../../customHooks/useTitle";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import ReviewCard from "../../shared/ReviewCard/ReviewCard";
const ServiceDetail = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const {
    serviceName,
    servicePrice,
    serviceImage,
    serviceDescription,
    firmName,
    author,
    _id,
  } = service;
  useEffect(() => {
    fetch(`http://localhost:5000/getReviews?serviceId=${_id}`)
      .then((res) => res.json())
      .then((revdata) => {
        setReviews(revdata);
      });
  }, [_id, service]);
  useTitle(serviceName);
  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["author"] = user.email;
    data["authorName"] = user.displayName;
    data["authorImage"] = user.photoURL;
    data["serviceId"] = _id;
    data["serviceName"] = serviceName;
    data["date"] = Date.now();
    console.log(data);
    fetch(`http://localhost:5000/addReview?email=${user.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("added");
        const current = [data, ...reviews];
        setReviews(current);
      });
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);
  return (
    <div className="container py-5">
      {/* service part  */}
      <div>
        <h1 className="text-2xl md:text-6xl font-titles text-white mb-5">
          {serviceName}
        </h1>
        <h3 className="text-xl">
          Firm Name: <span className="text-sky-400">{firmName}</span>
        </h3>
        <img
          src={serviceImage}
          alt=""
          className="w-full md:w-4/6 max-h-[500px] object-cover mt-5 mb-10"
        />
        <p className="text-2xl leading-relaxed">{serviceDescription}</p>
        <h6 className="my-5 text-xl">Service Charge: ${servicePrice}</h6>
      </div>
      {/* review part  */}
      <div>
        <div>
          {reviews.length > 0 ? (
            <h1 className="text-xl md:text-3xl mb-5 font-titles ">
              See Reviews
            </h1>
          ) : (
            <h1>No Reviews</h1>
          )}
          {reviews.map((review) => (
            <ReviewCard
              key={review._id + Math.random(55)}
              review={review}
            ></ReviewCard>
          ))}
        </div>
        {user && (
          <div>
            <h1>Add your review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                {...register("reviewtxt", { required: true })}
                className="w-full md:w-3/4 xl:w-2/4  p-3 border border-borderTheme focus:outline-none focus:border-primary"
                rows={7}
              />
              {errors.reviewtxt && (
                <span className="text-red-500 block">
                  <small>Field is required</small>
                </span>
              )}
              <button type="submit" className="btn btn-primary block">
                Submit
              </button>
            </form>
          </div>
        )}
        {!user && (
          <>
            <h3>
              To add a review please{" "}
              <Link
                to="/login"
                state={{ from: location }}
                replace
                className="text-sky-500"
              >
                login
              </Link>
            </h3>
          </>
        )}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ServiceDetail;
