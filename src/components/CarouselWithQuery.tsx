import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import getAllPokemonData from "../apis/getAllPokemonData";
import { fetchEvolutionChain } from "../apis/fetchEvolutionChain";
import fetchPokemonFromEvolutionChain from "../apis/fetchPokemonFromEvolutionChain";
import { Pokemon } from "../types/pokemon/Pokemon";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { PokemonEvolutionNameTreeNode } from "../types/PokemonEvolutionNameTreeNode";
import simplifyEvolutionChain from "../utils/simplifyEvolutionChain";
import simplifyPokemon from "../utils/simplifyPokemon";
import getLivingDexSetFromSessionStorage from "../utils/getLivingDexSetFromSessionStorage";
import replacePokemonName from "../utils/replacePokemonName";
import addSimplePokemonToSessionStorage from "../utils/addSimplePokemonToSessionStorage";
import getSimplePokemonFromSessionStorage from "../utils/getSimplePokemonFromSessionStorage";
import getEvolutionChainFromSessionStorage from "../utils/getEvolutionChainFromSessionStorage";
import addEvolutionChainToSessionStorage from "../utils/addEvolutionChainToSessionStorage";

export interface MatchParams {
  pokemonId: number;
  livingDex: boolean;
  backToLastHomeState: number;
  handleBackButtonReset: () => void;
  handleBackButtonState: (val: number) => void;
}

export default function CarouselWithQuery({
  pokemonId,
  livingDex,
  backToLastHomeState,
  handleBackButtonReset,
  handleBackButtonState,
}: MatchParams) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies | null>(
    null
  );

  const [evolutionChain, setEvolutionChain] =
    useState<PokemonEvolutionTreeNode | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);

  const livingDexStorage = getLivingDexSetFromSessionStorage();
  const [pokeball, setPokeball] = useState(
    livingDexStorage[pokemonId] ? redPokeball : greyPokeball
  );

  useEffect(() => {
    setEvolutionChain(null);

    const simplePokemonInStorage =
      getSimplePokemonFromSessionStorage(pokemonId);

    getAllPokemonData(pokemonId).then((pokemonData) => {
      const pokemonWithSanitizedName: Pokemon = replacePokemonName(
        pokemonData[0]
      );
      setPokemon(pokemonWithSanitizedName);

      const pokemonSpeciesWithSanitizedName: PokemonSpecies = pokemonData[1];
      setPokemonSpecies(pokemonSpeciesWithSanitizedName);

      const simplifiedPokemon =
        simplePokemonInStorage !== null
          ? simplePokemonInStorage
          : simplifyPokemon(pokemonWithSanitizedName);

      const url = pokemonSpeciesWithSanitizedName.evolution_chain.url;
      fetchEvolutionChain(url).then(async (evolutionChainData) => {
        // first, initiate tree of string from tree-structured data (simplify evolution chain)
        // second, fetch and modify tree of string into tree of simple pokemon (modify tree nodes)
        // third, present the tree of simple pokemon by traversing the tree (deconstruct and present into component)
        // to do so:
        // first: make a tree class that can represent both string and simple pokemon
        // second: fetchPokemonFromEvolutionChain is modified so that we fetch from tree, not 2d array
        // third: PokemonEvolutionChain is modified so that we present evolution chain from tree, not 2d array
        //        we might introduce PokemonEvolutionChainRow that consists of multiple PokemonEvolutionChainItem
        const pokemonEvolutionId = evolutionChainData.id;
        const evolutionChainInStorage =
          getEvolutionChainFromSessionStorage(pokemonEvolutionId);

        if (
          evolutionChainInStorage !== null &&
          evolutionChainInStorage != undefined
        ) {
          setEvolutionChain(evolutionChainInStorage);
        } else {
          const evolutionChainRoot: PokemonEvolutionNameTreeNode =
            simplifyEvolutionChain(evolutionChainData.chain);

          const pokemonEvolutionTree: PokemonEvolutionTreeNode =
            await fetchPokemonFromEvolutionChain(evolutionChainRoot);

          addEvolutionChainToSessionStorage(
            pokemonEvolutionId,
            pokemonEvolutionTree
          );
          setEvolutionChain(pokemonEvolutionTree);
        }
      });

      if (simplePokemonInStorage === null) {
        addSimplePokemonToSessionStorage(simplifiedPokemon);
      }
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
      handleBackButtonReset={handleBackButtonReset}
      backToLastHomeState={backToLastHomeState}
      handleBackButtonState={handleBackButtonState}
    />
  );
}
