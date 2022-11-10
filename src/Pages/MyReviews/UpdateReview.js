import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../customHooks/useTitle";

const UpdateReview = () => {
  const review = useLoaderData();
  useTitle("Update Review");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      `https://precision-law-server.vercel.app/updateReview/${review._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Updated");
        }
      });
  };

  return (
    <div className="container min-h-[83vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-[500px] p-5 border border-borderTheme"
      >
        <h1 className="text-xl capitalize mb-3">update your review</h1>
        <textarea
          className="w-full p-3 mb-5"
          defaultValue={review.reviewtxt}
          {...register("reviewtxt", { required: true })}
          rows={7}
        ></textarea>
        {errors.reviewtxt && (
          <p>
            <small>This field is required</small>
          </p>
        )}
        <button type="submit" className="btn btn-primary capitalize">
          submit
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateReview;
