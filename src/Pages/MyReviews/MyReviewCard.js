import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const MyReviewCard = ({ review, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { author, reviewtxt, _id, serviceName } = review;

  // delete operation

  return (
    <div className="mb-5 p-5 border border-borderTheme">
      <div className="w-full  ">
        <p>
          <small>Service Name</small>
        </p>
        <h1 className="text-2xl font-titles mb-5">{serviceName}</h1>

        <div>
          <h3 className="capitalize">
            <small>your review:</small>
          </h3>
          <p className="text-sm mt-2">{reviewtxt}</p>
          {user?.email === author && (
            <div className="mt-3">
              <Link
                to={`/updateReview/${_id}`}
                className="btn text-xs text-sky-500 hover:text-sky-500 capitalize  "
              >
                update
              </Link>
              <button
                onClick={() => handleDelete(review)}
                className="text-xs text-red-500 hover:text-red-500 capitalize ml-4"
              >
                delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
