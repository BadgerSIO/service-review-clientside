import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../customHooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Reviews");
  useEffect(() => {
    fetch(
      `https://precision-law-server.vercel.app/myReviews?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("pmToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user, logout]);
  const handleDelete = (review) => {
    const affirm = window.confirm(`Are you sure you want to delete`);
    if (affirm) {
      fetch(
        `https://precision-law-server.vercel.app/deleteReview/${review._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((results) => {
          console.log(results);
          if (results.deletedCount > 0) {
            const currentrev = reviews.filter((rev) => rev._id !== review._id);
            setReviews(currentrev);
            toast.success("Review deleted");
          }
        });
    }
  };
  return (
    <div className="container relative min-h-[83vh] py-5">
      {reviews.length > 0 ? (
        <h1 className="text-xl md:text-3xl mb-5 font-titles ">See Reviews </h1>
      ) : (
        <div className="capitalize absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4">
          <h1>No reviews were added</h1>
        </div>
      )}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <MyReviewCard
            key={review._id + Math.random(55)}
            review={review}
            handleDelete={handleDelete}
          ></MyReviewCard>
        ))}
      </div>
      {reviews.length > 0 ? <Toaster></Toaster> : <></>}
    </div>
  );
};

export default MyReviews;
