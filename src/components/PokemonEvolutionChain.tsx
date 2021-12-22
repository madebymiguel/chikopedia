import { useMemo } from "react";
import "../scss/PokemonEvolutionChain.scss";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { SimplePokemon } from "../types/SimplePokemon";
import PokemonEvolutionChainItem from "./PokemonEvolutionChainItem";

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
        evolutionPath.map((pokemonObject) => {
          return (
            <PokemonEvolutionChainItem
              key={pokemonObject.id}
              name={pokemonObject.name}
              index={pokemonObject.id}
              image={pokemonObject.sprite}
            />
          );
        });
      });
    }
  }, [evolutionChain]);

  return <div id="pokemon-chain">{pokemonChainItems}</div>;
}

export type evolutionPath = SimplePokemon[];

export function getEvolutionPathsFromTree(
  pokemonEvolutionTree: PokemonEvolutionTreeNode,
  previousPokemon: evolutionPath = []
): evolutionPath[] {
  const pokemon: SimplePokemon = pokemonEvolutionTree.pokemon;

  const nextPokemonData = pokemonEvolutionTree.nextPokemon;

  if (nextPokemonData === null || nextPokemonData.length === 0) {
    return [previousPokemon.concat(pokemon)];
  }

  return nextPokemonData
    .map((evolution) =>
      getEvolutionPathsFromTree(evolution, previousPokemon.concat(pokemon))
    )
    .flat();
}
