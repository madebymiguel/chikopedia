import { useMemo } from "react";
import PokemonEvolutionChainRow from "./PokemonEvolutionChainRow";
import "../scss/PokemonEvolutionChain.scss";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import getEvolutionPathsFromTree from "../utils/getEvolutionPathsFromTree";

export interface PokemonEvolutionChainProps {
  evolutionChain: PokemonEvolutionTreeNode;
  backToLastHomeState: number;
  setBackButton: (val: number) => void;
}
export default function PokemonEvolutionChain({
  evolutionChain,
  backToLastHomeState,
  setBackButton,
}: PokemonEvolutionChainProps) {
  // use the name from chain of evolution chain to fetchPokemon to get pokemon sprite.
  //
  // TODO: Fix the bug where some pokemon fails to present the evolution paths, even when API seems normal
  const pokemonEvolutionPaths = getEvolutionPathsFromTree(evolutionChain);
  const pokemonChainItems = useMemo(() => {
    if (pokemonEvolutionPaths !== null) {
      return pokemonEvolutionPaths.map((evolutionPath) => {
        return (
          <PokemonEvolutionChainRow
            evolutionPath={evolutionPath}
            backToLastHomeState={backToLastHomeState}
            setBackButton={setBackButton}
          />
        );
      });
    }
  }, [evolutionChain]);

  return <div className="pokemon-chain">{pokemonChainItems}</div>;
}
