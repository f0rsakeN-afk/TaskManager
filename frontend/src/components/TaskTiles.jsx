import React from "react";
import Spinner from "./Spinner";
import Task from "./Task";
import CreateButton from "./CreateButton";
import { getTodos } from "../services/Todo";

const TaskTiles = () => {
  const { isLoading, data: Todos, error } = getTodos();
  const tasks = Todos?.data?.tasks;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div className="container m-auto px-2 pt-4 xl:px-0">
      <div className="grid md:grid-cols-3 gap-4 xl:grid-cols-4">
        {tasks.map((task) => (
          <Task key={task._Pid} task={task} />
        ))}
      <CreateButton />
      </div>
    </div>
  );
};

export default TaskTiles;
