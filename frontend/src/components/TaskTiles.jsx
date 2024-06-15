import React, { useState } from "react";
import Spinner from "./Spinner";
import Task from "./Task";
import CreateButton from "./CreateButton";
import { getTodos } from "../services/Todo";

const TaskTiles = () => {
  const { isLoading, data: Todos, error } = getTodos();
  const tasks = Todos?.data?.tasks;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div className="container m-auto px-2 pt-4 xl:px-0">
      <div className="mb-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md rounded-md border border-gray-200 p-2 italic ring-orange-300 ring-offset-2 focus:outline-none focus:ring"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
        {filteredTasks.length === 0 ? (
          <div>No tasks found</div>
        ) : (
          filteredTasks.map((task) => <Task key={task._id} task={task} />)
        )}
        <CreateButton />
      </div>
    </div>
  );
};

export default TaskTiles;
