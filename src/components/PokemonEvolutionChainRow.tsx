import { evolutionPath } from "../types/evolutionChain/EvolutionChain";
import PokemonEvolutionChainItem from "./PokemonEvolutionChainItem";

export interface PokemonEvolutionChainRowProps {
  evolutionPath: evolutionPath;
}

export default function PokemonEvolutionChainRow({
  evolutionPath,
}: PokemonEvolutionChainRowProps) {
  return evolutionPath.map((pokemonObject) => {
    return (
      <PokemonEvolutionChainItem
        key={pokemonObject.id}
        name={pokemonObject.name}
        index={pokemonObject.id}
        image={pokemonObject.sprite}
      />
    );
  });
}
