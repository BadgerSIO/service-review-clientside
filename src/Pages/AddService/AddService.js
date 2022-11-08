import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
const AddService = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["author"] = user.email;
    console.log(data);
  };
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
          </div>
          <div>
            <label htmlFor="servicePrice">Service Price</label>
            <input
              type="number"
              {...register("servicePrice", { required: true })}
              className="w-full border border-borderTheme mt-5 p-2 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="serviceImage">Service image Url</label>
            <input
              type="url"
              {...register("serviceImage", { required: true })}
              className="w-full border border-borderTheme mt-5 p-2 focus:outline-none focus:border-primary"
            />
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
          </div>
        </div>
        <p>
          <small>
            {errors.serviceName &&
              errors.servicePrice &&
              errors.serviceImage &&
              errors.serviceDescription && <span>This field is required</span>}
          </small>
        </p>
        <button
          type="submit"
          className="py-2 px-3 capitalize border-white border mt-5"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
