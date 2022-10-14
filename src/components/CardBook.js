import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../features/books/booksSlice";
import LinkButton from "./LinkButton";

const CardBook = ({ title, image, author, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="card-book">
      <img className="img-card" src={image} alt={title} loading={"lazy"} />
      <div className="info-card">
        <div className="title-card">
          <span>Title: </span>
          <h2>{title}</h2>
        </div>
        <p>Authors: {author}</p>
        <div className="buttons-card">
          <LinkButton
            className="seedetails-button"
            link={`/books/${id}`}
            text="See details"
          />
          <button
            className="buttons delete-button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
