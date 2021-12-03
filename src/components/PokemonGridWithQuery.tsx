import React, { useEffect, useState } from "react";
import sortPokemon from "../utils/sortPokemon";
import PokemonGrid from "./PokemonGrid";
import getAllPokemon from "../apis/getAllPokemon";
import simplifyPokemon from "../utils/simplifyPokemon";
import useSimplePokemonSessionStorage from "../utils/useSimplePokemonSessionStorage";
import { POKEMON_LIMIT } from "../variables/globalVariables";
import replacePokemonNamesFromArray from "../utils/replacePokemonNamesFromArray";

export interface PokemonGridWithQueryProps {
  livingDex: boolean;
}

export default function PokemonGridWithQuery({
  livingDex,
}: PokemonGridWithQueryProps) {
  const [isFetchingPokemon, setIsFetchingPokemon] = useState<boolean>(false);
  const [allSimplePokemon, setPokemonStorage] = useSimplePokemonSessionStorage(
    []
  );

  useEffect(() => {
    if (allSimplePokemon.length === 0) {
      setIsFetchingPokemon(true);
      getAllPokemon(POKEMON_LIMIT).then((data) => {
        const sortedPokemonData = sortPokemon(data);
        const simplifiedPokemon = simplifyPokemon(sortedPokemonData);
        const fixedSimplifiedPokemon =
          replacePokemonNamesFromArray(simplifiedPokemon);
        setPokemonStorage(fixedSimplifiedPokemon);
        setIsFetchingPokemon(false);
      });
    }
  }, []);
  return (
    <PokemonGrid
      isLoading={isFetchingPokemon}
      allPokemon={allSimplePokemon}
      livingDex={livingDex}
    />
  );
}
