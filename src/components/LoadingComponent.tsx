import redPokeball from "../assets/red-pokeball.svg";
import "../scss/Loading.scss";

export default function LoadingComponent() {
  return (
    <img className="loading-img" src={redPokeball} alt="pokeball loading" />
  );
}
