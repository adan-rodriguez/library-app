import { Link } from "react-router-dom";

const LinkButton = ({ link, text, className }) => {
  return (
    <Link className={`buttons ${className}`} to={link}>
      {text}
    </Link>
  );
};

export default LinkButton;
