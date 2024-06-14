import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteTask = () => {
  return (
    <button className="text-red-500 hover:text-red-700 focus:outline-none">
      <RiDeleteBin5Line size={24} />
    </button>
  );
};

export default DeleteTask;
