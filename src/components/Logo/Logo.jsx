import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "/public/logo.svg"

export default function Logo(props) {
  const { className } = props;
  return (
    <Link
      className={`logo ${className ? className : ""}`}
      to="/"
      title="Characters"
      aria-label="Characters"
    >
      <img
        className="logo__image"
        src={logo}
        alt=""
        width="46"
        height="49"
      />
    </Link>
  );
}
