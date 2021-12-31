import PokemonEvolutionChainItem from "./PokemonEvolutionChainItem";
import { evolutionPath } from "../types/evolutionChain/EvolutionChain";

export interface PokemonEvolutionChainRowProps {
  evolutionPath: evolutionPath;
}

export default function PokemonEvolutionChainRow({
  evolutionPath,
}: PokemonEvolutionChainRowProps) {
  let count = 0;
  // TODO: after we modify PokemonEvolutionTreeNode, we add evolution detail to arrow
  return (
    <div className="pokemon-chain-row">
      {evolutionPath.map((pokemonObject) => {
        count = count + 1;
        return (
          <div className="pokemon-chain-item">
            <PokemonEvolutionChainItem
              key={pokemonObject.id}
              name={pokemonObject.name}
              index={pokemonObject.id}
              image={pokemonObject.sprite}
            />
            <div
              className="arrow"
              style={{
                display: count % evolutionPath.length === 0 ? "none" : "flex",
              }}
            >
              -{">"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
