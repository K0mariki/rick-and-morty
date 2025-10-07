import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="container">
      <h1>{error.message}</h1>
    </div>
  );
}
