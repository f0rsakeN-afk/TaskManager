import React from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container m-auto flex items-center justify-center pt-2">
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex ">
        <input
          type="text"
          placeholder="Enter your query"
          {...register("query", { required: true })}
          className="w-[20rem] rounded-l-md p-2 italic text-gray-800 ring-slate-600 focus:outline-none focus:ring-1 xl:w-[35rem]  "
        />
        {errors.query ? (
          <h3 className="absolute top-12 text-red-500">
            This field is required
          </h3>
        ) : (
          ""
        )}
        <button
          className="flex items-center justify-center rounded-r-md bg-orange-500 px-3 py-2 font-semibold text-white"
          type="submit"
        >
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
