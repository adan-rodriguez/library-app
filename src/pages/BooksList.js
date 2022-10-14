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

  return (
    <div className="container-bookslist">
      <input
        type="text"
        id="search"
        placeholder="Search book"
        onChange={handleFilter}
        value={search}
      />
      <LinkButton
        className="addbook-button"
        link={`add-book`}
        text="Add Book"
      />
      <Outlet />
      <div className="container-cardsbooks">
        {books
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
                author={book.authors}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BooksList;
