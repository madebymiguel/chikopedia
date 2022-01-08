import { PokemonSpeciesEggGroups } from "../types/pokemonSpecies/EggGroups";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";

function PokemonEggGroupComponent({ name }: { name: string }) {
  return <span className="egg-group">{upperCaseFirstLetter(name)} </span>;
}

export interface PokemonEggGroupsProps {
  eggGroups: PokemonSpeciesEggGroups[];
}

export default function PokemonEggGroups({ eggGroups }: PokemonEggGroupsProps) {
  const eggGroupComponent = eggGroups.map((eggGroupObj) => {
    const eggGroupName = eggGroupObj.name;
    return <PokemonEggGroupComponent name={eggGroupName} />;
  });

  return (
    <div className="egg-groups-container">
      {eggGroupComponent.map((eggGroupComponent) => eggGroupComponent)}
    </div>
  );
}
