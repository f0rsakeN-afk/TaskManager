import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteTodo } from "../services/Todo";

const DeleteTask = ({ id }) => {
  const { isDeleting, delet } = deleteTodo();
  const handleClick = () => {
    delet(id);
  };
  return (
    <button
      className="text-red-500 hover:text-red-700 focus:outline-none"
      onClick={handleClick}
      disabled={isDeleting}
    >
      <RiDeleteBin5Line size={24} />
    </button>
  );
};

export default DeleteTask;
