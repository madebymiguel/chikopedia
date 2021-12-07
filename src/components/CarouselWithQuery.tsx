import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../apis/fetchPokemon";
import { Pokemon } from "../types/pokemon/Pokemon";
import replacePokemonName from "../utils/replacePokemonName";
import Carousel from "./Carousel";

export interface MatchParams {
  pokemonName: string | number;
}

export default function CarouselWithQuery({ pokemonName }: MatchParams) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [finishedFetching, setFinishedFetching] = useState(false);

  useEffect(() => {
    if (pokemonName !== "") {
      const res = fetchPokemon(pokemonName);
      res.then((pokemon) => {
        const fixedPokemon = replacePokemonName(pokemon);
        setPokemon(fixedPokemon);
        setFinishedFetching(true);
      });
    }
  }, [pokemonName]);

  return <Carousel pokemon={pokemon} pokemonName={pokemonName} />;
}
