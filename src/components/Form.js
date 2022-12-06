import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addBook, editBook } from "../features/books/booksSlice";

function Form() {
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
    bookId &&
      setBook(books.find((bookToEdit) => String(bookToEdit.id) === bookId));
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
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                required
                value={book.title}
                onChange={handleChangeStrings}
              />
            </label>
          </li>
          <li>
            <label htmlFor="isbn">
              ISBN
              <input
                type="number"
                id="isbn"
                name="isbn"
                required
                value={book.isbn}
                onChange={handleChangeNumbers}
              />
            </label>
          </li>
          <li>
            <label htmlFor="pageCount">
              Pages
              <input
                type="number"
                name="pageCount"
                id="pageCount"
                required
                value={book.pageCount}
                onChange={handleChangeNumbers}
              />
            </label>
          </li>
          <li>
            <label htmlFor="year">
              Year
              <input
                type="number"
                name="year"
                id="year"
                required
                value={book.year}
                onChange={handleChangeNumbers}
              />
            </label>
          </li>
          <li>
            <label htmlFor="thumbnailUrl">
              URL Image
              <input
                type="text"
                name="thumbnailUrl"
                id="thumbnailUrl"
                required
                value={book.thumbnailUrl}
                onChange={handleChangeStrings}
              />
            </label>
          </li>
          <li>
            <label htmlFor="description">
              Description
              <textarea
                name="description"
                id="description"
                required
                rows={5}
                value={book.description}
                onChange={handleChangeStrings}
              />
            </label>
          </li>
          <li>
            <label htmlFor="authors">
              Authors
              <input
                type="text"
                name="authors"
                id="authors"
                required
                value={book.authors}
                onChange={handleChangeArrays}
              />
            </label>
          </li>
          <li>
            <label htmlFor="categories">
              Categories
              <input
                type="text"
                name="categories"
                id="categories"
                required
                value={book.categories}
                onChange={handleChangeArrays}
              />
            </label>
          </li>
        </ul>
        <div className="buttons-form">
          <button className="buttons save-button" type="submit">
            Save
          </button>
          <button
            type="button"
            className="buttons cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
