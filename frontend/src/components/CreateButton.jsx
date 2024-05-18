import React from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

const CreateButton = () => {
  return (
    <div className="flex items-center justify-center rounded-md border border-slate-400 p-4 shadow-md ">
      <Link to='/createtask' className="text-green-600 hover:animate-spin">
        <CiCirclePlus size={92} />
      </Link>
    </div>
  );
};

export default CreateButton;
