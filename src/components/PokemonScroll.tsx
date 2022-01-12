import "../scss/PokemonScroll.scss";
import { SimplePokemon } from "../types/SimplePokemon";

export interface PokemonScrollProps {
  isLoading: boolean;
  allPokemon: SimplePokemon[];
  livingDex: boolean;
}

export default function PokemonScroll({
  isLoading,
  allPokemon,
  livingDex,
}: PokemonScrollProps) {
  return (
    <div className="pokemon-scroll-container">
      <div className="pokemon-scroll">
        <h2>Coming Soon!</h2>
      </div>
    </div>
  );
}
