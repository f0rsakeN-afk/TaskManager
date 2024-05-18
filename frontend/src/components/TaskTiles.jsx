import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchTasks } from "../store/taskSlice";
import Spinner from "./Spinner";
import Task from "./Task";
import CreateButton from "./CreateButton";

const TaskTiles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const res = useSelector((state) => state.task);
console.log(res);
  const status = res.status;
  if (status === STATUSES.LOADING) return <Spinner />;

  const task = res?.task?.data?.tasks;
  console.log(task);

  return (
    <div className="container m-auto pt-4">
      <div className="grid grid-cols-4 gap-4">
        {task?.map((t) => (
          <Task t={t} key={t._id} />
        ))}
        <CreateButton/>
      </div>
    </div>
  );
};

export default TaskTiles;
