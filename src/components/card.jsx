import React from "react";
import { request } from "../config/request";
import { useLoading } from "../hooks/useLoading";
import "./Card.css";

export const Card = ({ title, description, id, refetch }) => {
  const { isloading, endload, onload } = useLoading();
  const deleteItem = () => {
    onload();
    request
      .delete(`/todos/${id}`)
      .then((res) => {
        refetch();
      })
      .finally(() => {
        endload();
      });
  };

  const editCards = () => {
    const newTitle = prompt("", title);
    const newDescription = prompt("", description);
    request
      .put(`/todos/${id}`, { title: newTitle, description: newDescription })
      .then((res) => {
        refetch();
      });
  };

  return (
    <div className="card-container">
      {isloading && <h1 className="loading-text">KUTING....</h1>}
      <>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="button-container">
          <button
            onClick={deleteItem}
            className="button button-delete"
          >
            Delete
          </button>
          <button
            onClick={editCards}
            className="button button-edit"
          >
            Edit
          </button>
        </div>
      </>
    </div>
  );
};
