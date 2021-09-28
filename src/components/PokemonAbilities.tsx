import "../scss/PokemonAbilities.scss";
import React from "react";
import { PokemonAbility } from "../types/PokemonAbility";

export interface PokemonAbilityProps {
  abilities: PokemonAbility[];
}

export default function PokemonAbilities({ abilities }: PokemonAbilityProps) {
  return (
    <div className="pokemon-ability-container">
      <h2 className="ability-title">Abilities</h2>
      {abilities.map((ability) => {
        return <span className="ability-name">{ability.ability.name}</span>;
      })}
    </div>
  );
}
