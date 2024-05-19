import React from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditButton = () => {
  const naviagte = useNavigate();
  return (
    <button className="text-green-500 hover:text-green-700 focus:outline-none">
      <FaEdit size={24} />
    </button>
  );
};

export default EditButton;
