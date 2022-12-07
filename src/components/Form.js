import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addBook, editBook } from "../features/books/booksSlice";
import scrollToTop from "../utils/scrollToTop";

function Form() {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [year, setYear] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  const books = useSelector((state) => state.books);
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeIsbn = (e) => {
    setIsbn(Number(e.target.value));
  };

  const handleChangePageCount = (e) => {
    setPageCount(Number(e.target.value));
  };

  const handleChangeYear = (e) => {
    setYear(Number(e.target.value));
  };

  const handleChangeThumbnailUrl = (e) => {
    setThumbnailUrl(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeAuthors = (e) => {
    setAuthors(e.target.value.split(","));
  };

  const handleChangeCategories = (e) => {
    setCategories(e.target.value.split(","));
  };

  const backToBookDetail = () => {
    navigate(`/books/${bookId}`, { replace: true });
  };

  const backToBookList = () => {
    navigate("/books", { replace: true });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const book = {
      title,
      isbn,
      pageCount,
      year,
      thumbnailUrl,
      description,
      authors,
      categories,
    };

    if (bookId) {
      dispatch(editBook({ ...book, id: bookId }));
      backToBookDetail();
    } else {
      dispatch(
        addBook({
          ...book,
          id: uuidv4(),
        })
      );
      backToBookList();
    }
  };

  const handleCancelSubmitForm = () => {
    bookId ? backToBookDetail() : backToBookList();
  };

  const findBookToEdit = () =>
    books.find((bookToCheck) => bookToCheck.id === bookId);

  const fillFormDataBookToEdit = () => {
    const bookToEdit = findBookToEdit();

    setTitle(bookToEdit.title);

    setIsbn(bookToEdit.isbn);

    setPageCount(bookToEdit.pageCount);

    setYear(bookToEdit.year);

    setThumbnailUrl(bookToEdit.thumbnailUrl);

    setDescription(bookToEdit.description);

    setAuthors(bookToEdit.authors);

    setCategories(bookToEdit.categories);
  };

  const hideScrollBar = () => {
    document.querySelector("body").style.overflowY = "hidden";
  };

  const showScrollBar = () => {
    document.querySelector("body").style.overflowY = "";
  };

  useEffect(() => {
    bookId && fillFormDataBookToEdit();
    hideScrollBar();
    scrollToTop();

    return () => {
      showScrollBar();
    };
  }, []);

  return (
    <div className="container-form">
      <form onSubmit={handleSubmitForm}>
        <ul>
          <li>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={handleChangeTitle}
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
                value={isbn}
                onChange={handleChangeIsbn}
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
                value={pageCount}
                onChange={handleChangePageCount}
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
                value={year}
                onChange={handleChangeYear}
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
                value={thumbnailUrl}
                onChange={handleChangeThumbnailUrl}
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
                value={description}
                onChange={handleChangeDescription}
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
                value={authors}
                onChange={handleChangeAuthors}
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
                value={categories}
                onChange={handleChangeCategories}
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
            onClick={handleCancelSubmitForm}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
