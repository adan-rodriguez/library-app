import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBook, editBook } from "../features/books/booksSlice";
import { v4 as uuidv4 } from "uuid";
import LinkButton from "./LinkButton";

const Form = () => {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    pageCount: "",
    year: "",
    thumbnailUrl: "",
    description: "",
    authors: "",
    categories: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookId } = useParams();
  const books = useSelector((state) => state.books);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookId) {
      dispatch(editBook(book));
      navigate(`/books/${book.id}`, { replace: true });
    } else {
      dispatch(
        addBook({
          ...book,
          id: uuidv4(),
        })
      );
      navigate("/books", { replace: true });
    }
  };

  useEffect(() => {
    bookId && setBook(books.find((book) => String(book.id) === bookId));
  }, []);

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={book.title}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="isbn">ISBN</label>
            <input
              type="number"
              id="isbn"
              name="isbn"
              required
              value={book.isbn}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="pageCount">Pages</label>
            <input
              type="number"
              name="pageCount"
              id="pageCount"
              required
              value={book.pageCount}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              name="year"
              id="year"
              required
              value={book.year}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="thumbnailUrl">URL Image</label>
            <input
              type="text"
              name="thumbnailUrl"
              id="thumbnailUrl"
              required
              value={book.thumbnailUrl}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              required
              rows={5}
              value={book.description}
              onChange={handleChange}
            ></textarea>
          </li>
          <li>
            <label htmlFor="authors">Authors</label>
            <input
              type="text"
              name="authors"
              id="authors"
              required
              value={book.authors}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="categories">Categories</label>
            <input
              type="text"
              name="categories"
              id="categories"
              required
              value={book.categories}
              onChange={handleChange}
            />
          </li>
        </ul>
        <div className="buttons-form">
          <button className="buttons save-button" type="submit">
            Save
          </button>
          <LinkButton
            className="cancel-button"
            link={bookId ? `/books/${bookId}` : "/books"}
            text="Cancel"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
