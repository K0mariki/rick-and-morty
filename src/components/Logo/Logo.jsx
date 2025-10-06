import { Link } from "react-router-dom";
import "./Logo.scss";

export default function Logo(props) {
  const { className } = props;
  return (
    <Link
      className={`logo ${className}`}
      to={"characters"}
      title="Characters"
      aria-label="Characters"
    >
      <img
        className="logo__image"
        src="logo.svg"
        alt=""
        width="46"
        height="49"
      />
    </Link>
  );
}
