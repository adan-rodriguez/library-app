import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LinkButton from "../components/LinkButton";
import { useEffect } from "react";

const DetailsBook = () => {
  const books = useSelector((state) => state.books);

  const { bookId } = useParams();

  const book = books.filter((book) => String(book.id) === bookId);

  useEffect(() => {
    window.scrollTo(0, 0)  
  }, [])

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
              <p>
                <span className="underline">Authors</span>: {book.authors}
              </p>
              <p>
                <span className="underline">Year</span>: {book.year}
              </p>
              <p>
                <span className="underline">Description</span>:{" "}
                {book.description}
              </p>
              <p>
                <span className="underline">Category</span>: {book.categories}
              </p>
              <p>
                <span className="underline">Pages</span>: {book.pageCount}
              </p>
              <p>
                <span className="underline">ISBN</span>: {book.isbn}
              </p>
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
