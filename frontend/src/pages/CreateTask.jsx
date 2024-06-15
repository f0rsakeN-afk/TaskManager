import React from "react";
import { useForm } from "react-hook-form";
import { createTodo } from "../services/Todo";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const { isCreating, create } = createTodo();

  const onSubmit = (data) => {
    console.log(data);
    create(data, {
      onSuccess: () => {
        navigate("/home");
        reset();
      },
    });
  };

  return (
    <div className="container mx-auto max-w-md py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-lg bg-white p-6 shadow-lg"
      >
        <Container>
          <Label text={"Title"} />
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.title && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </Container>

        <Container>
          <Label text={"Description"} />
          <textarea
            {...register("description", { required: true })}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.description && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </Container>

        <Container>
          <Label text={"Priority"} />
          <select
            {...register("priority", { required: true })}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </Container>

        <Container>
          <Label text={"Status"} />
          <select
            {...register("status", { required: true })}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            <option value=""> Select Status</option>
            <option value="pending">Pending</option>
            <option value="running">Running</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </Container>

        <Container>
          <Label text={"Due Date"} />
          <input
            type="datetime-local"
            {...register("dueDate", { required: true })}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.dueDate && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </Container>

        <button
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-lg text-white hover:bg-blue-700 focus:bg-blue-800"
          type="submit"
          disabled={isCreating}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;

const Container = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

const Label = ({ text }) => {
  return (
    <label className="block text-lg font-medium text-gray-700">{text}</label>
  );
};
