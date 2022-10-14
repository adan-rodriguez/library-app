import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container-header">
        <Link className="container-logo" to="/" title="Home">
          <img
            width={30}
            src="https://www.seekpng.com/png/full/794-7948249_icono-de-libros-png.png"
            alt="Logo"
          />
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
