import { useEffect, useState } from "react";
import getAllPokemonData from "../apis/getAllPokemonData";
import { Pokemon } from "../types/pokemon/Pokemon";
import { getLivingDexSet } from "../utils/getLivingDexSet";
import replacePokemonName from "../utils/replacePokemonName";
import Carousel from "./Carousel";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { fetchEvolutionChain } from "../apis/fetchEvolutionChain";
import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";
import { simplifyEvolutionChain } from "../utils/simplifyEvolutionChain";
import fetchPokemonFromEvolutionChain from "../apis/fetchPokemonFromEvolutionChain";
import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { SimplePokemon } from "../types/SimplePokemon";

export interface MatchParams {
  pokemonId: number;
  livingDex: boolean;
  allSimplePokemon: SimplePokemon[];
}

// Intend parameter is pokemonID not pokvemonName
export default function CarouselWithQuery({
  pokemonId,
  livingDex,
  allSimplePokemon,
}: MatchParams) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies | null>(
    null
  );
  const [evolutionChain, setEvolutionChain] =
    useState<PokemonEvolutionTreeNode | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);

  const livingDexStorage = getLivingDexSet();
  const [pokeball, setPokeball] = useState(
    livingDexStorage[pokemonId] ? redPokeball : greyPokeball
  );

  // next step is to make session storage where key is pokemon id/name and value is simple evolution chain.
  useEffect(() => {
    // how do we properly reset evolution chain every time we switch to different pokemon?
    setEvolutionChain(null);
    getAllPokemonData(pokemonId).then((pokemonData) => {
      const pokemonWithSanitizedName: Pokemon = replacePokemonName(
        pokemonData[0]
      );
      setPokemon(pokemonWithSanitizedName);
      const pokemonSpeciesWithSanitizedName: PokemonSpecies = pokemonData[1];
      setPokemonSpecies(pokemonSpeciesWithSanitizedName);
      const url = pokemonSpeciesWithSanitizedName.evolution_chain.url;
      const fetchedEvolutionChain: Promise<EvolutionChain> =
        fetchEvolutionChain(url);
      fetchedEvolutionChain.then(async (evolutionChainData) => {
        // first, initiate tree of string from tree-structured data (simplify evolution chain)
        // second, fetch and modify tree of string into tree of simple pokemon (modify tree nodes)
        // third, present the tree of simple pokemon by traversing the tree (deconstruct and present into component)
        // to do so:
        // first: make a tree class that can represent both string and simple pokemon
        // second: fetchPokemonFromEvolutionChain is modified so that we fetch from tree, not 2d array
        // third: PokemonEvolutionChain is modified so that we present evolution chain from tree, not 2d array
        //        we might introduce PokemonEvolutionChainRow that consists of multiple PokemonEvolutionChainItem
        const evolutionChainRoot: PokemonEvolutionNameTreeNode =
          simplifyEvolutionChain(evolutionChainData.chain);

        const pokemonEvolutionTree: PokemonEvolutionTreeNode =
          await fetchPokemonFromEvolutionChain(evolutionChainRoot);
        setEvolutionChain(pokemonEvolutionTree);
      });
      setFinishedFetching(true);
    });
  }, [pokemonId]);

  return (
    <Carousel
      pokemon={pokemon}
      pokemonSpecies={pokemonSpecies}
      pokemonId={pokemonId}
      pokeball={pokeball}
      setPokeball={setPokeball}
      finishedFetching={finishedFetching}
      livingDex={livingDex}
      evolutionChain={evolutionChain}
    />
  );
}
