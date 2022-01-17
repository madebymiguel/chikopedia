import { POKEDEX_STYLE_KEY } from "../variables/globalVariables";

export default function getPokedexStyleFromSessionStorage() {
  const serializedPokedexStyle = sessionStorage.getItem(POKEDEX_STYLE_KEY);

  const pokedexStyleResult: string =
    serializedPokedexStyle === null ? "" : JSON.parse(serializedPokedexStyle);

  return pokedexStyleResult;
}
