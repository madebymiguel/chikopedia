import { useEffect, useMemo, useState } from "react";
import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";
import { Pokemon } from "../types/pokemon/Pokemon";
import { SimplePokemon } from "../types/SimplePokemon";
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

  // refactor later
  useEffect(() => {
    async function fetchChainSprites() {
      if (evolutionChain) {
        const chainArray = [];
        chainArray.push(evolutionChain.chain.species.name);
        if (evolutionChain.chain.evolves_to.length > 0) {
          chainArray.push(evolutionChain.chain.evolves_to[0].species.name);
          if (evolutionChain.chain.evolves_to[0].evolves_to.length > 0) {
            chainArray.push(
              evolutionChain.chain.evolves_to[0].evolves_to[0].species.name
            );
          }
        }
        const chainToBeFetched = [];
        for (let i = 0; i < chainArray.length; i++) {
          chainToBeFetched.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${chainArray[i]}`)
          );
        }

        const fetchedChainData = await Promise.all(chainToBeFetched);

        Promise.all(fetchedChainData)
          .then((responses) =>
            Promise.all(responses.map((response) => response.json()))
          )
          .then((data: Pokemon[]) => {
            const simplePokemonData = data.map((pokemon: Pokemon) => {
              const simplePokemon: SimplePokemon = {
                id: pokemon.id,
                name: pokemon.name,
                sprite: pokemon.sprites.front_default,
              };
              return simplePokemon;
            });
            setSimplePokemonChain(simplePokemonData);
          });
      }
    }
    fetchChainSprites();
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
