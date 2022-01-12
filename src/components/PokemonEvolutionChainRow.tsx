import PokemonEvolutionChainArrow from "./PokemonEvolutionChainArrow";
import PokemonEvolutionChainItem from "./PokemonEvolutionChainItem";
import { evolutionPath } from "../types/SimplePokemonWithEvolutionDetail";

export interface PokemonEvolutionChainRowProps {
  evolutionPath: evolutionPath;
  backToLastHomeState: number;
  setBackButton: (val: number) => void;
}

export default function PokemonEvolutionChainRow({
  evolutionPath,
  backToLastHomeState,
  setBackButton,
}: PokemonEvolutionChainRowProps) {
  // TODO: after we modify PokemonEvolutionTreeNode, we add evolution detail to arrow
  return (
    <div className="pokemon-chain-row">
      {evolutionPath.map((pokemonEvolutionObject) => {
        const pokemonObject = pokemonEvolutionObject.simplePokemon;
        const evolutionDetailArray = pokemonEvolutionObject.evolutionDetail;
        const evolutionDetail = pokemonEvolutionObject.evolutionDetail[0];
        return (
          <div className="pokemon-chain-item">
            {evolutionDetail !== undefined && (
              <PokemonEvolutionChainArrow evolutionDetail={evolutionDetail} />
            )}
            <PokemonEvolutionChainItem
              key={pokemonObject.id}
              name={pokemonObject.name}
              index={pokemonObject.id}
              image={pokemonObject.sprite}
              backToLastHomeState={backToLastHomeState}
              setBackButton={setBackButton}
            />
          </div>
        );
      })}
    </div>
  );
}
