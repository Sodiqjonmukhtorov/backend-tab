import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";
import "./Form.css";

export const Form = ({ refetch }) => {
  const { handleSubmit, register, formState, reset } = useForm();
  const submit = (data) => {
    request
      .post("/todos", data)
      .then((res) => {
        reset();
        refetch();
      })
      .finally(() => {});
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form-container">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          {...register("title")}
          type="text"
          id="title"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        Send
      </button>
    </form>
  );
};
