import { useEffect, useState } from "react";
import { fetchPokemon } from "../apis/fetchPokemon";
import { Pokemon } from "../types/pokemon/Pokemon";
import replacePokemonName from "../utils/replacePokemonName";
import Carousel from "./Carousel";

export interface MatchParams {
  pokemonId: number;
}

// Intend parameter is pokemonID not pokemonName
export default function CarouselWithQuery({ pokemonId }: MatchParams) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [finishedFetching, setFinishedFetching] = useState(false);

  useEffect(() => {
    if (pokemonId !== null) {
      const res = fetchPokemon(pokemonId);
      res.then((pokemon) => {
        const fixedPokemon = replacePokemonName(pokemon);
        setPokemon(fixedPokemon);
        setFinishedFetching(true);
      });
    }
  }, [pokemonId]);

  return (
    <Carousel
      pokemon={pokemon}
      pokemonId={pokemonId}
      finishedFetching={finishedFetching}
    />
  );
}
