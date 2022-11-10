import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ReviewCard = ({ review, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { author, authorImage, authorName, reviewtxt, _id } = review;
  return (
    <div className="mb-5 ">
      <div className="w-full md:w-2/3 xl:w-2/4 pb-5 border-b border-borderTheme ">
        <div>
          {authorImage ? (
            <>
              <img
                src={authorImage}
                alt=""
                className="w-[50px] h-[50px]  object-cover "
              />
            </>
          ) : (
            <FaUser className="text-white text-3xl"></FaUser>
          )}
        </div>
        <div>
          <h5 className="text-lg font-titles capitalize ">{authorName}</h5>
          <p className="text-sm mt-2">{reviewtxt}</p>
          {user?.email === author && (
            <>
              <Link
                to={`/updateReview/${_id}`}
                className="text-xs text-sky-500 hover:text-sky-500 capitalize "
              >
                update
              </Link>
              <button
                onClick={() => handleDelete(review)}
                className="text-xs text-red-500 hover:text-red-500 capitalize ml-4"
              >
                delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
