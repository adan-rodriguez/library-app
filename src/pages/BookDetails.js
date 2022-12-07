import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LinkButton from "../components/LinkButton";
import scrollToTop from "../utils/scrollToTop";

function DetailsBook() {
  const books = useSelector((state) => state.books);

  const { bookId } = useParams();

  const detailedBook = books.filter((book) => book.id === bookId);

  useEffect(() => {
    scrollToTop();
  }, []);

  if (detailedBook.length === 0) {
    return (
      <div className="book-notexist">
        The book with the id &quot;{bookId}&quot; does not exist
      </div>
    );
  }

  return (
    <>
      {detailedBook.map((book) => (
        <div className="container-detail" key={book.id}>
          <img
            className="img-details"
            src={book.thumbnailUrl}
            alt={book.title}
            loading="lazy"
          />
          <div className="text-detail">
            <h1 className="title-detail">{book.title}</h1>
            <p>
              <span className="underline">
                Author{book.authors.length > 1 && "s"}
              </span>
              : {book.authors.join(", ")}
            </p>
            <p>
              <span className="underline">Year</span>: {book.year}
            </p>
            <p>
              <span className="underline">Description</span>: {book.description}
            </p>
            <p>
              <span className="underline">
                Categor{book.categories.length > 1 ? "ies" : "y"}
              </span>
              : {book.categories.join(", ")}
            </p>
            <p>
              <span className="underline">Pages</span>: {book.pageCount}
            </p>
            <p>
              <span className="underline">ISBN</span>: {book.isbn}
            </p>
            <LinkButton className="edit-button" link="edit-book" text="Edit" />
            <Outlet />
          </div>
        </div>
      ))}
    </>
  );
}

export default DetailsBook;
