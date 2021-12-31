import { fetchPokemon } from "./fetchPokemon";
import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { SimplePokemon } from "../types/SimplePokemon";

export default async function fetchPokemonFromEvolutionChain(
  evolutionChainRoot: PokemonEvolutionNameTreeNode
): Promise<PokemonEvolutionTreeNode> {
  const pokemonName = evolutionChainRoot.pokemonName;

  //TODO: put evolution_details here
  const nextPokemonData = evolutionChainRoot.nextPokemon;

  const simplePokemonData = await fetchPokemon(pokemonName).then((pokemon) => {
    const simplePokemon: SimplePokemon = {
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
    };
    return simplePokemon;
  });

  if (nextPokemonData === null || nextPokemonData.length === 0) {
    return { pokemon: simplePokemonData, nextPokemon: null };
  }

  return {
    pokemon: simplePokemonData,
    nextPokemon: await Promise.all(
      nextPokemonData.map(fetchPokemonFromEvolutionChain)
    ),
  };
}
