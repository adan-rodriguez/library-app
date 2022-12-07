import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteBook } from "../features/books/booksSlice";
import LinkButton from "./LinkButton";

function CardBook({ title, image, authors, id }) {
  const dispatch = useDispatch();

  const handleDelete = (idBook) => {
    dispatch(deleteBook(idBook));
  };

  return (
    <div className="card-book">
      <img className="img-card" src={image} alt={title} loading="lazy" />
      <div className="info-card">
        <h2 className="title-card">{title}</h2>
        <p>
          <span className="underline">Author{authors.length > 1 && "s"}</span>:{" "}
          {authors.join(", ")}
        </p>
        <div className="buttons-card">
          <LinkButton
            className="seedetails-button"
            link={`/books/${id}`}
            text="See details"
          />
          <button
            type="button"
            className="buttons delete-button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

CardBook.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default CardBook;
