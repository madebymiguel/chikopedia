import { useEffect, useMemo, useState } from "react";
import { fetchPokemon } from "../apis/fetchPokemon";
import fetchPokemonFromEvolutionChain from "../apis/fetchPokemonFromEvolutionChain";
import "../scss/PokemonEvolutionChain.scss";
import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";
import { Pokemon } from "../types/pokemon/Pokemon";
import { SimplePokemon } from "../types/SimplePokemon";
import { getSpritesFromEvolutionChain } from "../utils/getSpritesFromEvolutionChain";
import PokemonEvolutionChainItem from "./PokemonEvolutionChainItem";

export interface PokemonEvolutionChainProps {
  evolutionChain: EvolutionChain | null;
}
export default function PokemonEvolutionChain({
  evolutionChain,
}: PokemonEvolutionChainProps) {
  // use the name from chain of evolution chain to fetchPokemon to get pokemon sprite.
  // Edge case: create map function to get all the pokemon at the same evolution level (e.g eevee)
  // edge case for pokemon with no evolution is solved

  const [simplePokemonChain, setSimplePokemonChain] = useState<
    SimplePokemon[] | null
  >(null);

  useEffect(() => {
    const chainArray: string[][] = [];
    if (evolutionChain != null) {
      getSpritesFromEvolutionChain(evolutionChain.chain, chainArray, []);
      console.log("Chain Array: ", chainArray);
      fetchPokemonFromEvolutionChain(chainArray).then((data: Pokemon[]) => {
        const simplePokemonData = data.map((pokemon: Pokemon) => {
          const simplePokemon: SimplePokemon = {
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon.sprites.front_default,
          };
          return simplePokemon;
        });
        console.log(simplePokemonData);
        setSimplePokemonChain(simplePokemonData);
      });
    }
  }, [evolutionChain]);

  const pokemonChainItems = useMemo(() => {
    if (simplePokemonChain !== null) {
      return simplePokemonChain.map((pokemonObject) => {
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
  }, [simplePokemonChain]);

  return <div id="pokemon-chain">{pokemonChainItems}</div>;
}
