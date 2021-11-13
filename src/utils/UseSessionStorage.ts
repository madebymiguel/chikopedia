import { useEffect, useState } from "react";
import { Pokemon } from "../types/Pokemon";
import { SimplePokemon } from "../types/SimplePokemon";

const key = "allSimplePokemon";

function getSessionStorage(key: string, allSimplePokemon?: SimplePokemon[]) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return JSON.stringify(allSimplePokemon);
  }
  return stored;
}

export default function UseSessionStorage(
  allSimplePokemon: SimplePokemon[]
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [pokemonStorage, setPokemonStorage] = useState<string>(
    getSessionStorage(key, allSimplePokemon)
  );
  useEffect(() => {
    sessionStorage.setItem(key, pokemonStorage);
    console.log("stored", JSON.parse(pokemonStorage));
  }, [pokemonStorage]);

  return [pokemonStorage, setPokemonStorage];
}
