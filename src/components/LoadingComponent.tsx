import redPokeball from "../assets/red-pokeball.svg";
import "../scss/Loading.scss";

export default function LoadingComponent() {
  return (
    <div className="loading-container">
      <img className="loading-img" src={redPokeball} alt="pokeball loading" />
    </div>
  );
}
