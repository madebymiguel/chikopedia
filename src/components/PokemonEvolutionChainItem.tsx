import { Link } from "react-router-dom";
import "../scss/PokemonEvolutionChain.scss";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";

export interface PokemonEvolutionChainItemProps {
  name: string;
  index: number;
  image: string;
}

export default function PokemonEvolutionChainItem({
  name,
  index,
  image,
}: PokemonEvolutionChainItemProps) {
  return (
    <Link to={`/pokemon/${index}`} className="link">
      <div className="chain-item-container">
        <img src={image} className="pokemon-sprite" alt="pokemon-sprite" />
        <span className="pokemon-name">{upperCaseFirstLetter(name)}</span>
      </div>
    </Link>
  );
}
