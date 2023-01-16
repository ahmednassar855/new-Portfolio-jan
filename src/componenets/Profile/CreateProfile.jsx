import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full name is required"),
    firstName: yup.string().required("Your First name is required"),
    lastName: yup.string().required("Your last name is required"),
    age: yup.number().positive().integer().min(16).required("Your Age is required and not less than 16 Y"),
    email: yup.string().email().required(),
    facebookLink: yup.string().email().nullable(),
    githubLink: yup.string().email().nullable(),
    twitterLink: yup.string().email().nullable(),
    instagramLink: yup.string().email().nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate('/createProfile')
    
  };

  return (
    <div className="bg-slate-400 w-full h-screen flex flex-row justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-9 m-auto grid md:grid-cols-2 grid-cols-1 w-4/5 gap-9 justify-center items-center"
      >
        <div>
          <label htmlFor="fullName" className=" font-bold text-2xl">
            Full Name
          </label>
          <input
            type="text"
            placeholder="full name..."
            id="fullName"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("fullName")}
          />

          <p className="text-red-500 font-bold ">{errors.fullName?.message}</p>
        </div>

        <div>
          <label htmlFor="firstName" className=" font-bold text-2xl">
            {" "}
            First Name
          </label>
          <input
            type="text"
            placeholder="First name..."
            id="firstName"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("firstName")}
          />
          <p className="text-red-500 font-bold ">{errors.firstName?.message}</p>
        </div>
        <div>
          <label htmlFor="lastName" className=" font-bold text-2xl">
            Last Name
          </label>
          <input
            type="text"
            placeholder="last name..."
            id="lastName"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("lastName")}
          />
          <p className="text-red-500 font-bold ">{errors.lastName?.message}</p>
        </div>
        <div>
          <label htmlFor="age" className=" font-bold text-2xl">
            Last Name
          </label>
          <input
            type="number"
            placeholder="Your age..."
            
            id="age"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("age")}
          />
          <p className="text-red-500 font-bold ">{errors.age?.message}</p>
        </div>

        <div>
          <label htmlFor="email" className=" font-bold text-2xl">
            {" "}
            Email
          </label>
          <input
            type="email"
            placeholder="email..."
            id="email"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("email")}
          />
          <p className="text-red-500 font-bold ">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="githubLink" className=" font-bold text-2xl">
            GitHub
          </label>
          <input
            type="email"
            placeholder="github link"
            id="githubLink"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("githubLink")}
          />
          <p className="text-red-500 font-bold ">
            {errors.githubLink?.message}
          </p>
        </div>

        <div>
          <label htmlFor="facebookLink" className=" font-bold text-2xl">
            Facebook
          </label>
          <input
            type="email"
            placeholder="facebook link"
            id="facebookLink"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("facebookLink")}
          />
          <p className="text-red-500 font-bold ">
            {errors.facebookLink?.message}
          </p>
        </div>
        <div>
          <label htmlFor="instagramLink" className=" font-bold text-2xl">
            Instagram
          </label>
          <input
            type="email"
            placeholder="instagram link"
            id="instagramLink"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("instagramLink")}
          />
          <p className="text-red-500 font-bold ">
            {errors.instagramLink?.message}
          </p>
        </div>

        <div>
          <label htmlFor="twitterLink" className=" font-bold text-2xl">
            Twitter
          </label>
          <input
            type="email"
            placeholder="twitter link"
            id="twitterLink"
            className="w-full py-3 border-2 border-gray-800 rounded-2xl px-4"
            {...register("twitterLink")}
          />
          <p className="text-red-500 font-bold ">
            {errors.twitterLink?.message}
          </p>
        </div>

        <button type="submit" className="py-3 bg-gray-700 border rounded-3xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
