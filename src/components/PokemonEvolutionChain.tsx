import { useMemo } from "react";
import PokemonEvolutionChainRow from "./PokemonEvolutionChainRow";
import "../scss/PokemonEvolutionChain.scss";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import getEvolutionPathsFromTree from "../utils/getEvolutionPathsFromTree";

export interface PokemonEvolutionChainProps {
  evolutionChain: PokemonEvolutionTreeNode;
  backToLastHomeState: number;
  handleBackButtonState: (val: number) => void;
}
export default function PokemonEvolutionChain({
  evolutionChain,
  backToLastHomeState,
  handleBackButtonState,
}: PokemonEvolutionChainProps) {
  const pokemonEvolutionPaths = getEvolutionPathsFromTree(evolutionChain);
  const pokemonChainItems = useMemo(() => {
    if (pokemonEvolutionPaths !== null) {
      return pokemonEvolutionPaths.map((evolutionPath) => {
        return (
          <PokemonEvolutionChainRow
            evolutionPath={evolutionPath}
            backToLastHomeState={backToLastHomeState}
            handleBackButtonState={handleBackButtonState}
          />
        );
      });
    }
  }, [evolutionChain]);

  return <div className="pokemon-chain">{pokemonChainItems}</div>;
}
