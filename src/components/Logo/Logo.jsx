import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      className="logo"
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
