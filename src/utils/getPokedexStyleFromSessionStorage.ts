import { POKEDEX_STYLE_KEY } from "../variables/globalVariables";

// Return the current stored toggle for pokedex style found in menu
export default function getPokedexStyleFromSessionStorage() {
  const serializedPokedexStyle = sessionStorage.getItem(POKEDEX_STYLE_KEY);

  const pokedexStyleResult: string =
    serializedPokedexStyle === null
      ? "grid"
      : JSON.parse(serializedPokedexStyle);

  return pokedexStyleResult;
}
