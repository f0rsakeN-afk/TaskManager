import React from "react";
import Spinner from "./Spinner";
import Task from "./Task";
import CreateButton from "./CreateButton";
import { getTodos } from "../services/Todo";

const TaskTiles = () => {
  const { isLoading, Todos, error } = getTodos();
  
  return (
    <div className="container m-auto px-2 pt-4 xl:px-0 ">
      <div className="grid grid-cols-3 gap-4 xl:grid-cols-4">csd</div>
    </div>
  );
};

export default TaskTiles;
