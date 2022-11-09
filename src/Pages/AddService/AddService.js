import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
const AddService = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["author"] = user.email;
    fetch(`http://localhost:5000/addService`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("New Service Added!");
        }
      });
    console.log(data);
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);
  return (
    <div className="min-h-[83vh] container py-5">
      <h1 className="text-2xl font-titles">Add Service</h1>
      <h3>Please fill the form to add a new service</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-borderTheme p-7 mt-5"
      >
        <div className="grid lg:grid-cols-2 lg:gap-5">
          <div>
            <label htmlFor="serviceName">Name of the service</label>
            <input
              {...register("serviceName", { required: true })}
              className="w-full border border-borderTheme mt-5 p-2 focus:outline-none focus:border-primary"
            />
            {errors.serviceName && (
              <span>
                <small className="text-red-500">This field is required</small>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="servicePrice">Service Price</label>
            <input
              type="number"
              {...register("servicePrice", { required: true })}
              className="w-full border border-borderTheme mt-5 p-2 focus:outline-none focus:border-primary"
            />
            {errors.servicePrice && (
              <span>
                <small className="text-red-500">This field is required</small>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="serviceImage">Service image Url</label>
            <input
              type="url"
              {...register("serviceImage", { required: true })}
              className="w-full border border-borderTheme mt-5 p-2 focus:outline-none focus:border-primary"
            />
            {errors.serviceImage && (
              <span>
                <small className="text-red-500">This field is required</small>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="firmName">Firm that provide the service</label>
            <input
              type="text"
              {...register("firmName", { required: true })}
              className="w-full border border-borderTheme mt-5 p-2 focus:outline-none focus:border-primary"
            />
            {errors.firmName && (
              <span>
                <small className="text-red-500">This field is required</small>
              </span>
            )}
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="serviceDescription">Service Description</label>
            <textarea
              {...register("serviceDescription", { required: true })}
              id="serviceDescription"
              cols="30"
              rows="10"
              className="w-full border border-borderTheme mt-5 p-2 focus:outline-none focus:border-primary"
            ></textarea>

            {errors.serviceDescription && (
              <span>
                <small className="text-red-500">This field is required</small>
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="py-2 px-3 capitalize border-white border mt-5"
        >
          submit
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default AddService;
