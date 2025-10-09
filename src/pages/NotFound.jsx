import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle(`404 | Rick and Morty`);

  return (
    <div className="not-found">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>404</h1>
      </div>
    </div>
  );
}
