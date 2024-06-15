import React from "react";
import { GiProgression } from "react-icons/gi";
import DeleteTask from "./DeleteTask";
import EditButton from "./EditButton";

const Task = ({ task }) => {
  const { title, description, priority, status, dueDate, createdAt, _id } =
    task;

  // Format dates for better readability
  const formattedCreatedAt = new Date(createdAt).toLocaleDateString();
  const formattedDueDate = new Date(dueDate).toLocaleDateString();

  return (
    <div className="relative rounded-md border border-slate-400 p-4 shadow-md">
      <h2 className="mb-2 text-2xl font-semibold text-orange-600">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>
      <div className="mb-2">
        <h3 className="text-lg capitalize">
          Priority: <span className="font-medium">{priority}</span>
        </h3>
      </div>
      <div className="mb-2 flex items-center gap-2">
        Status:
        <GiProgression className="text-lg" />
        <h3 className="text-lg capitalize">{status}</h3>
      </div>
      <div className="text-sm">
        <h3 className="text-green-600">Created At: {formattedCreatedAt}</h3>
        <h3 className="text-red-600">Due Date: {formattedDueDate}</h3>
      </div>
      <div className=" absolute  bottom-4 right-4 flex gap-2">
        <EditButton id={_id} />
        <DeleteTask id={_id} />
      </div>
    </div>
  );
};

export default Task;
