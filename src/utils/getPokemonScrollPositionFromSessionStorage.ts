import { POKEMON_SCROLL_POSITION } from "../variables/globalVariables";

// Return the current stored position of scroll page
export default function getPokemonScrollPositionFromSessionStorage() {
  const serializedPokemonScrollPosition = sessionStorage.getItem(
    POKEMON_SCROLL_POSITION
  );

  const pokemonScrollPosition: number =
    serializedPokemonScrollPosition === null
      ? 1
      : JSON.parse(serializedPokemonScrollPosition);

  return pokemonScrollPosition;
}
