import "../scss/PokemonAbilities.scss";
import React from "react";
import { PokemonAbility } from "../types/pokemon/Ability";

export interface PokemonAbilityProps {
  abilities: PokemonAbility[];
}

export default function PokemonAbilities({ abilities }: PokemonAbilityProps) {
  return (
    <div className="pokemon-ability-container">
      <h2 className="ability-title">ABILITIES</h2>
      <div className="ability-container">
        {abilities.map((ability) => {
          return <div className="ability-name">{ability.ability.name}</div>;
        })}
      </div>
    </div>
  );
}
