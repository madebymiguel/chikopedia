import { useEffect, useState } from "react";
import { fetchPokemon } from "../apis/fetchPokemon";
import { fetchPokemonSpecies } from "../apis/fetchPokemonSpecies";
import { Pokemon } from "../types/pokemon/Pokemon";
import { getLivingDexSet } from "../utils/getLivingDexSet";
import replacePokemonName from "../utils/replacePokemonName";
import Carousel from "./Carousel";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { fetchEvolutionChain } from "../apis/fetchEvolutionChain";
import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";

export interface MatchParams {
  pokemonId: number;
  livingDex: boolean;
}

// Intend parameter is pokemonID not pokvemonName
export default function CarouselWithQuery({
  pokemonId,
  livingDex,
}: MatchParams) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies | null>(
    null
  );
  const [evolutionChain, setEvolutionChain] = useState<EvolutionChain | null>(
    null
  );

  const [finishedFetching, setFinishedFetching] = useState(false);

  const livingDexStorage = getLivingDexSet();
  const [pokeball, setPokeball] = useState(
    livingDexStorage[pokemonId] ? redPokeball : greyPokeball
  );

  useEffect(() => {
    if (pokemonId !== null) {
      async function getAllPokemonData() {
        // refactor later
        const pokemonDataToFetch = [];
        pokemonDataToFetch.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        );
        pokemonDataToFetch.push(
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        );
        const fetchedPokemonData = await Promise.all(pokemonDataToFetch);

        Promise.all(fetchedPokemonData)
          .then((responses) => {
            return Promise.all(responses.map((response) => response.json()));
          })
          .then((data) => {
            const fixedPokemon: Pokemon = replacePokemonName(data[0]);
            setPokemon(fixedPokemon);
            const fixedPokemonSpecies: PokemonSpecies = data[1];
            setPokemonSpecies(fixedPokemonSpecies);
            const url = fixedPokemonSpecies.evolution_chain.url;
            const res = fetchEvolutionChain(url);
            res.then((data) => {
              setEvolutionChain(data);
            });
            setFinishedFetching(true);
          });
      }

      getAllPokemonData();
    }
  }, [pokemonId]);

  return (
    <Carousel
      pokemon={pokemon}
      pokemonSpecies={pokemonSpecies}
      pokemonId={pokemonId}
      pokeball={pokeball}
      setPokeball={setPokeball}
      evolutionChain={evolutionChain}
      finishedFetching={finishedFetching}
      livingDex={livingDex}
    />
  );
}
