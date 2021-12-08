import "../scss/PokemonTypes.scss";
import { PokemonType } from "../types/pokemon/Type";
import Colors from "../types/PokemonTypeColorScheme";

function PokemonTypeComponent({ name }: { name: string }) {
  const currentPokemonTypeColor = Colors[name];
  return (
    <div
      className="pokemon-type"
      style={{ backgroundColor: currentPokemonTypeColor }}
    >
      {name.toUpperCase()}
    </div>
  );
}

export interface PokemonTypesProps {
  types: PokemonType[];
}

/** A presentation component to display a list of Pokemon Type */
export default function PokemonTypes({ types }: PokemonTypesProps) {
  const typeComponents = types.map((typeObj) => {
    const { type } = typeObj;
    const { name } = type;
    return <PokemonTypeComponent key={name} name={name} />;
  });

  return (
    <div className="pokemon-type-container">
      {typeComponents.map((typeComponent) => typeComponent)}
    </div>
  );
}
