import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";

export async function fetchEvolutionChain(url: string) {
  const res = await fetch(url);
  const pokemonResult: EvolutionChain = await res.json();
  return pokemonResult;
}
