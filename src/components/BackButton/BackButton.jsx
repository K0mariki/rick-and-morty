import { Link } from "react-router-dom";
import Button from "./../Button";

export default function BackButton() {
  return (
    <Link to={-1}>
      <Button icon="arrowBack" className="button--back button--transparent">
        GO BACK
      </Button>
    </Link>
  );
}
