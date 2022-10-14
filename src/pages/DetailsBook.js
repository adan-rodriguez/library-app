import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LinkButton from "../components/LinkButton";

const DetailsBook = () => {
  const books = useSelector((state) => state.books);

  const { bookId } = useParams();

  const book = books.filter((book) => String(book.id) === bookId);

  if (book.length === 0) {
    return (
      <div className="book-notexist">
        The book with the id "{bookId}" does not exist
      </div>
    );
  }

  return (
    <>
      {book.map((book) => {
        return (
          <div className="container-detail" key={book.id}>
            <img
              className="img-details"
              src={book.thumbnailUrl}
              alt={book.title}
              loading={"lazy"}
            />
            <div className="text-detail">
              <h1 className="title-detail">{book.title}</h1>
              <p>Authors: {book.authors}</p>
              <p>Year: {book.year}</p>
              <p>Description: {book.description}</p>
              <p>Category: {book.categories}</p>
              <p>Pages: {book.pageCount}</p>
              <p>ISBN: {book.isbn}</p>
              <LinkButton
                className="edit-button"
                link={"edit-book"}
                text="Edit"
              />
              <Outlet />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailsBook;
