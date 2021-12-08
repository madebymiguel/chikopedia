import { Link } from "react-router-dom";

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
    <div>
      <Link to={`/pokemon/${index}`} className="link">
        <span>{name}</span>
        <img src={image} />
      </Link>
    </div>
  );
}
