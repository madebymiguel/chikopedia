import { Link } from "react-router-dom";
import "../scss/PokemonEvolutionChain.scss";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";

export interface PokemonEvolutionChainItemProps {
  name: string;
  index: number;
  image: string;
  backToLastHomeState: number;
  handleBackButtonState: (val: number) => void;
}

export default function PokemonEvolutionChainItem({
  name,
  index,
  image,
  backToLastHomeState,
  handleBackButtonState,
}: PokemonEvolutionChainItemProps) {
  return (
    <Link
      to={`/pokemon/${index}`}
      onClick={() => handleBackButtonState(backToLastHomeState)}
      className="link"
    >
      <div className="chain-item-container">
        <img src={image} className="pokemon-sprite" alt="pokemon-sprite" />
        <span className="pokemon-name">{upperCaseFirstLetter(name)}</span>
      </div>
    </Link>
  );
}
