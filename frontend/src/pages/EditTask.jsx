import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import Label from "../components/Label";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { getSingleTodo, updateTodo } from "../services/Todo";
import { useQueryClient } from "@tanstack/react-query";

const EditTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { isLoading, singleTodo } = getSingleTodo(id);
  const { isEditing, edit } = updateTodo();
  // console.log(singleTodo.data.task);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    edit(
      { id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["todos"] });
          navigate("/home");
          reset();
        },
        onError: (err) => {
          console.log("Error updating the task", err);
        },
      },
    );
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="container mx-auto px-4 pt-4 xl:px-0">
      <BackButton />
      <div className="mx-auto max-w-lg py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-lg bg-white p-8 shadow-lg"
        >
          <Container>
            <Label text={"Title"} />
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none"
              defaultValue={singleTodo.data.task.title}
              disabled={isEditing}
            />
            {errors.title && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </Container>

          <Container>
            <Label text={"Description"} />
            <textarea
              {...register("description", { required: true })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none"
              defaultValue={singleTodo.data.task.description}
              disabled={isEditing}
            />
            {errors.description && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </Container>

          <Container>
            <Label text={"Priority"} />
            <select
              {...register("priority", { required: true })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none"
              defaultValue={singleTodo.data.task.priority}
              disabled={isEditing}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </Container>

          <Container>
            <Label text={"Status"} />
            <select
              {...register("status", { required: true })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none"
              defaultValue={singleTodo.data.task.status}
              disabled={isEditing}
            >
              <option value="pending">Pending</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
            </select>
            {errors.status && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </Container>

          <Container>
            <Label text={"Due Date"} />
            <input
              type="datetime-local"
              {...register("dueDate", { required: true })}
              className="w-full rounded-md border border-gray-300 p-3 focus:border-teal-500 focus:outline-none"
              defaultValue={
                singleTodo.data.task.dueDate
                  ? singleTodo.data.task.dueDate.slice(0, 16)
                  : ""
              }
              disabled={isEditing}
            />
            {errors.dueDate && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </Container>

          <button
            className="w-full rounded-md bg-teal-600 px-4 py-3 text-lg text-white hover:bg-teal-700 focus:bg-teal-800"
            type="submit"
            disabled={isEditing}
          >
            Edit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
