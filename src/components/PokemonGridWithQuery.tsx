import React, { useEffect, useState } from "react";
import sortPokemon from "../utils/sortPokemon";
import PokemonGrid from "./PokemonGrid";
import useSessionStorage from "../utils/UseSessionStorage";
import getAllPokemon from "../apis/getAllPokemon";
import simplifyPokemon from "../utils/SimplifyPokemon";

export default function PokemonGridWithQuery() {
  const [finishedFetching, setFinishedFetching] = useState<boolean>(true);
  const [pokemonStorage, setPokemonStorage] = useSessionStorage(
    simplifyPokemon([])
  );

  // 898 pokemon
  const POKEMON_LIMIT = 50;

  useEffect(() => {
    const allSimplePokemon = sessionStorage.getItem("allSimplePokemon");
    if (
      allSimplePokemon !== null &&
      JSON.parse(allSimplePokemon).length === 0
    ) {
      setFinishedFetching(false);
      getAllPokemon(POKEMON_LIMIT).then((data) => {
        const sortedPokemonData = sortPokemon(data);
        const simplifiedPokemon = simplifyPokemon(sortedPokemonData);
        setPokemonStorage(JSON.stringify(simplifiedPokemon));
        setFinishedFetching(true);
      });
    }
  }, []);

  return (
    <PokemonGrid
      isLoading={!finishedFetching}
      allPokemon={JSON.parse(pokemonStorage)}
    />
  );
}
