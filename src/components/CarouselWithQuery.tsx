import { useEffect, useState } from "react";
import getAllPokemonData from "../apis/getAllPokemonData";
import { Pokemon } from "../types/pokemon/Pokemon";
import { getLivingDexSet } from "../utils/getLivingDexSet";
import replacePokemonName from "../utils/replacePokemonName";
import Carousel from "./Carousel";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { fetchEvolutionChain } from "../apis/fetchEvolutionChain";
import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";
import { SimplePokemon } from "../types/SimplePokemon";
import { getSpritesFromEvolutionChain } from "../utils/getSpritesFromEvolutionChain";
import fetchPokemonFromEvolutionChain from "../apis/fetchPokemonFromEvolutionChain";

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
  const [evolutionChain, setEvolutionChain] = useState<SimplePokemon[] | null>(
    null
  );

  const [finishedFetching, setFinishedFetching] = useState(false);

  const livingDexStorage = getLivingDexSet();
  const [pokeball, setPokeball] = useState(
    livingDexStorage[pokemonId] ? redPokeball : greyPokeball
  );

  useEffect(() => {
    // how do we properly reset evolution chain every time we switch to different pokemon?
    setEvolutionChain(null);
    getAllPokemonData(pokemonId).then((data) => {
      const fixedPokemon: Pokemon = replacePokemonName(data[0]);
      setPokemon(fixedPokemon);
      const fixedPokemonSpecies: PokemonSpecies = data[1];
      setPokemonSpecies(fixedPokemonSpecies);
      const url = fixedPokemonSpecies.evolution_chain.url;
      const fetchedEvolutionChain: Promise<EvolutionChain> =
        fetchEvolutionChain(url);
      fetchedEvolutionChain.then((evolutionChainData) => {
        const evolutionPathArray: string[][] = [];
        getSpritesFromEvolutionChain(
          evolutionChainData.chain,
          evolutionPathArray,
          []
        );
        fetchPokemonFromEvolutionChain(evolutionPathArray).then(
          (data: Pokemon[]) => {
            const simplePokemonData = data.map((pokemon: Pokemon) => {
              const simplePokemon: SimplePokemon = {
                id: pokemon.id,
                name: pokemon.name,
                sprite: pokemon.sprites.front_default,
              };
              return simplePokemon;
            });
            console.log(simplePokemonData);
            setEvolutionChain(simplePokemonData);
          }
        );
      });
      setFinishedFetching(true);
    });
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
