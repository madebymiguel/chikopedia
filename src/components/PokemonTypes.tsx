import React from "react";
import { PokemonType } from "../types/PokemonType";
import Colors, { PokemonTypeName } from "../types/PokemonTypeColorScheme";
import "../scss/PokemonTypes.scss";

function extractType(name: String): PokemonTypeName {
  return name as PokemonTypeName;
}

function PokemonTypeComponent({ name }: { name: string }) {
  const currentPokemonType: PokemonTypeName = extractType(name);
  const currentPokemonTypeColor = Colors[currentPokemonType];
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
    return <PokemonTypeComponent name={name} />;
  });

  return <>{typeComponents.map((typeComponent) => typeComponent)}</>;
}
