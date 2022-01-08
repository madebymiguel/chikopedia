import { fetchPokemon } from "./fetchPokemon";
import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { SimplePokemon } from "../types/SimplePokemon";
import replacePokemonName from "../utils/replacePokemonName";

export default async function fetchPokemonFromEvolutionChain(
  evolutionChainRoot: PokemonEvolutionNameTreeNode
): Promise<PokemonEvolutionTreeNode> {
  const pokemonName = evolutionChainRoot.pokemonId;

  //TODO: put evolution_details here
  const nextPokemonData = evolutionChainRoot.nextPokemon;

  const pokemonEvolutionDetail = evolutionChainRoot.evolutionDetail;

  const simplePokemonData = await fetchPokemon(pokemonName).then(
    (pokemonObject) => {
      const pokemon = replacePokemonName(pokemonObject);
      const simplePokemon: SimplePokemon = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
      };
      return simplePokemon;
    }
  );

  if (nextPokemonData === null || nextPokemonData.length === 0) {
    return {
      pokemon: simplePokemonData,
      evolutionDetail: pokemonEvolutionDetail,
      nextPokemon: null,
    };
  }

  return {
    pokemon: simplePokemonData,
    evolutionDetail: pokemonEvolutionDetail,
    nextPokemon: await Promise.all(
      nextPokemonData.map(fetchPokemonFromEvolutionChain)
    ),
  };
}
