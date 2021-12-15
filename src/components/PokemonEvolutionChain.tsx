import { useMemo } from "react";
import "../scss/PokemonEvolutionChain.scss";
import { SimplePokemon } from "../types/SimplePokemon";
import PokemonEvolutionChainItem from "./PokemonEvolutionChainItem";

export interface PokemonEvolutionChainProps {
  evolutionChain: SimplePokemon[] | null;
}
export default function PokemonEvolutionChain({
  evolutionChain,
}: PokemonEvolutionChainProps) {
  // use the name from chain of evolution chain to fetchPokemon to get pokemon sprite.
  // Edge case: create map function to get all the pokemon at the same evolution level (e.g eevee)
  // edge case for pokemon with no evolution is solved

  const pokemonChainItems = useMemo(() => {
    if (evolutionChain !== null) {
      return evolutionChain.map((pokemonObject) => {
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
  }, [evolutionChain]);

  return <div id="pokemon-chain">{pokemonChainItems}</div>;
}
