import { useMemo } from "react";
import "../scss/PokemonEvolutionChain.scss";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { getEvolutionPathsFromTree } from "../utils/getEvolutionPathsFromTree";
import PokemonEvolutionChainItem from "./PokemonEvolutionChainItem";
import PokemonEvolutionChainRow from "./PokemonEvolutionChainRow";

export interface PokemonEvolutionChainProps {
  evolutionChain: PokemonEvolutionTreeNode;
}
export default function PokemonEvolutionChain({
  evolutionChain,
}: PokemonEvolutionChainProps) {
  // use the name from chain of evolution chain to fetchPokemon to get pokemon sprite.
  // Edge case: create map function to get all the pokemon at the same evolution level (e.g eevee)
  // edge case for pokemon with no evolution is solved
  const pokemonEvolutionPaths = getEvolutionPathsFromTree(evolutionChain);
  const pokemonChainItems = useMemo(() => {
    if (pokemonEvolutionPaths !== null) {
      return pokemonEvolutionPaths.map((evolutionPath) => {
        return <PokemonEvolutionChainRow evolutionPath={evolutionPath} />;
      });
    }
  }, [evolutionChain]);

  return <div id="pokemon-chain">{pokemonChainItems}</div>;
}
