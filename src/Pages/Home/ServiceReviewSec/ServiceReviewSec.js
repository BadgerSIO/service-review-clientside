import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import RevCard from "./RevCard";

const ServiceReviewSec = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://precision-law-server.vercel.app/allReviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user]);
  return (
    <div className="py-10 lg:py-20 container">
      <h1 className="text-3xl lg:text-5xl font-titles mb-10 capitalize">
        What Clients say about the services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {reviews.map((review) => (
          <RevCard key={review._id} review={review}></RevCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceReviewSec;
