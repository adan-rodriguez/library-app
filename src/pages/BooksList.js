import { useSelector } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import CardBook from "../components/CardBook";

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const handleFilter = (e) => {
    setSearchParams({ search: e.target.value });
  };

  const booksFilter = books
    .filter((book) => {
      if (!search) return true;

      const title = book.title.toLowerCase();
      return title.includes(search.toLowerCase());
    })
    .map((book) => {
      return (
        <CardBook
          key={book.id}
          id={book.id}
          title={book.title}
          image={book.thumbnailUrl}
          authors={book.authors}
        />
      );
    });

  return (
    <div className="container-bookslist">
      {books.length > 0 && (
        <input
          type="text"
          id="search"
          placeholder="Search book by title"
          onChange={handleFilter}
          value={search}
        />
      )}
      <LinkButton
        className="addbook-button"
        link={`add-book`}
        text={books.length === 0 ? "Add your first book" : "Add book"}
      />
      <Outlet />
      <div className="container-cardsbooks">
        {books.length > 0 && booksFilter.length > 0 && booksFilter}
        {books.length === 0 && (
          <div className="no-book">You have no books in your library</div>
        )}
        {booksFilter.length === 0 && books.length > 0 && (
          <div className="no-book">No book found</div>
        )}
      </div>
    </div>
  );
};

export default BooksList;
