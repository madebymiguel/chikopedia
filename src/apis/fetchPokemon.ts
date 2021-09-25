import { Pokemon } from "../types/ApiResponseTypes";

export async function fetchPokemon(index: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);

    const pokemonResult: Pokemon = await res.json();
    return pokemonResult;
}