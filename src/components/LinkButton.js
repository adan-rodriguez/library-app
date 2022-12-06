import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButton({ link, text, className }) {
  return (
    <Link className={`buttons ${className}`} to={link}>
      {text}
    </Link>
  );
}

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LinkButton;
