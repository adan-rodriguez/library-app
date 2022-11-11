import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBook, editBook } from "../features/books/booksSlice";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    pageCount: "",
    year: "",
    thumbnailUrl: "",
    description: "",
    authors: [],
    categories: [],
  });
  console.log(book);

  const books = useSelector((state) => state.books);
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeStrings = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeNumbers = (e) => {
    setBook({
      ...book,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleChangeArrays = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value.split(","),
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

  const handleCancel = () => {
    bookId
      ? navigate(`/books/${book.id}`, { replace: true })
      : navigate("/books", { replace: true });
  };

  useEffect(() => {
    bookId && setBook(books.find((book) => String(book.id) === bookId));
    document.querySelector("body").style.overflowY = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.querySelector("body").style.overflowY = "";
    };
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
              onChange={handleChangeStrings}
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
              onChange={handleChangeNumbers}
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
              onChange={handleChangeNumbers}
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
              onChange={handleChangeNumbers}
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
              onChange={handleChangeStrings}
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
              onChange={handleChangeStrings}
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
              onChange={handleChangeArrays}
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
              onChange={handleChangeArrays}
            />
          </li>
        </ul>
        <div className="buttons-form">
          <button className="buttons save-button" type="submit">
            Save
          </button>
          <button className="buttons cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
