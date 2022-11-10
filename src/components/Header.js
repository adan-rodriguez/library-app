import books_icon from "../assets/images/books-icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container-header">
        <Link className="container-logo" to="/" title="Home">
          <img width={30} height={30} src={books_icon} alt="Logo" />
          <div className="text-logo">Library App</div>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="books">Library</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
