import { useDispatch } from "react-redux";
import { deleteBook } from "../features/books/booksSlice";
import LinkButton from "./LinkButton";

const CardBook = ({ title, image, authors, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="card-book">
      <img className="img-card" src={image} alt={title} loading={"lazy"} />
      <div className="info-card">
        <h2 className="title-card">{title}</h2>
        <p>
          <span className="underline">Author{authors.length > 1 && "s"}</span>: {authors.join(", ")}
        </p>
        <div className="buttons-card">
          <LinkButton
            className="seedetails-button"
            link={`/books/${id}`}
            text="See details"
          />
          <button
            className="buttons delete-button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
