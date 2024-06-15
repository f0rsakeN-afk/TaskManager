import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GoBack } from "../utils/GoBack";

const BackButton = () => {
  return (
    <button
      className="flex items-center gap-2  rounded-full bg-orange-500 px-4 py-3 font-semibold text-white ring-orange-500 ring-offset-2 transition-colors duration-200 ease-in hover:bg-orange-700 focus:outline-none focus:ring"
      onClick={GoBack()}
    >
      {" "}
      <IoMdArrowRoundBack />
      Go Back
    </button>
  );
};

export default BackButton;
