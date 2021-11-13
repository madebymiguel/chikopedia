import React, { useEffect, useState } from "react";
import sortPokemon from "../utils/sortPokemon";
import PokemonGrid from "./PokemonGrid";
import getAllPokemon from "../apis/getAllPokemon";
import simplifyPokemon from "../utils/simplifyPokemon";
import useSimplePokemonSessionStorage from "../utils/useSimplePokemonSessionStorage";

export default function PokemonGridWithQuery() {
  const [isFetchingPokemon, setIsFetchingPokemon] = useState<boolean>(false);
  const [allSimplePokemon, setPokemonStorage] = useSimplePokemonSessionStorage(
    []
  );

  // 898 pokemon
  const POKEMON_LIMIT = 50;

  useEffect(() => {
    if (allSimplePokemon.length === 0) {
      setIsFetchingPokemon(true);
      getAllPokemon(POKEMON_LIMIT).then((data) => {
        const sortedPokemonData = sortPokemon(data);
        const simplifiedPokemon = simplifyPokemon(sortedPokemonData);
        setPokemonStorage(simplifiedPokemon);
        setIsFetchingPokemon(false);
      });
    }
  }, []);
  return (
    <PokemonGrid isLoading={isFetchingPokemon} allPokemon={allSimplePokemon} />
  );
}
