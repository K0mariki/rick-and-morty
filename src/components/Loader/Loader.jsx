import "./Loader.scss";
import loadingImg from "./../../assets/images/loading.png";

export default function Loader() {
  return (
    <div className="loader container">
      <img src={loadingImg} alt="Loading portal"></img>
      <p>Loading...</p>
    </div>
  );
}
