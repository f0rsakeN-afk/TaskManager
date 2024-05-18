import React from "react";
import { GiProgression } from "react-icons/gi";

const Task = ({ t }) => {
  const { title, description, priority, status, dueDate, createdAt } = t;

  // Format dates for better readability
  const formattedCreatedAt = new Date(createdAt).toLocaleDateString();
  const formattedDueDate = new Date(dueDate).toLocaleDateString();

  return (
    <div
      className="rounded-md border border-slate-400 p-4 shadow-md"
      key={t._id}
    >
      <h2 className="mb-2 text-2xl font-semibold text-orange-600">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>
      <div className="mb-2">
        <h3 className="text-lg capitalize">
          Priority: <span className="font-medium">{priority}</span>
        </h3>
      </div>
      <div className="mb-2 flex items-center gap-2">Status:
        <GiProgression className="text-lg" />
        <h3 className="text-lg capitalize">{status}</h3>
      </div>
      <div className="text-sm">
        <h3 className="text-green-600">Created At: {formattedCreatedAt}</h3>
        <h3 className="text-red-600">Due Date: {formattedDueDate}</h3>
      </div>
    </div>
  );
};

export default Task;
