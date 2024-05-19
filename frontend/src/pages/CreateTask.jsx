import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTask } from "../store/taskSlice";

const CreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    //console.log(data);
    dispatch(createTask(data));
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
          <input
            type="text"
            {...register("priority", { required: true })}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          {errors.priority && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </Container>

        <Container>
          <Label text={"Status"} />
          <input
            type="text"
            {...register("status", { required: true })}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
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
