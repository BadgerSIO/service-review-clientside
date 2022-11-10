import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContext);
  const { author, authorImage, authorName, reviewtxt, _id } = review;
  return (
    <div className="mb-5">
      <div className="w-full md:w-2/3 xl:w-2/4 ">
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
            <button className="text-xs text-blue-500 hover:text-red-500 capitalize font-titles">
              delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
