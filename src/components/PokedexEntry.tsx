import "../scss/PokedexEntry.scss";
import React from "react";
import { PokemonType } from "../types/PokemonType";
import { PokemonStat } from "../types/PokemonStat";
import { PokemonAbility } from "../types/PokemonAbility";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";
import PokemonAbilities from "./PokemonAbilities";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";

export interface PokedexEntryProps {
  name: string;
  index: number;
  image: string;
  types: PokemonType[];
  region: string;
  stats: PokemonStat[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  //   dexEntry: string;
  //   evolution?: number[];
}

export default function PokedexEntry({
  name,
  index,
  image,
  types,
  region,
  stats,
  weight,
  height,
  abilities,
}: PokedexEntryProps) {
  // const pokeImage =
  //   "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png";
  return (
    <div className="pokedex-entry-container">
      <section className="pokedex-screen">
        <div className="header">
          <h2 className="title">{upperCaseFirstLetter(name)}</h2>
          <h3 className="index">#{index}</h3>
        </div>
        <div className="sprite">
          <img src={image} className="sprite-image"></img>
        </div>
      </section>

      <section className="pokedex-detailed-info">
        <PokemonTypes types={types} />
        {/* <span>Found In: {region === undefined ? "unknown" : region}</span> */}
        <div className="description">
          <span>WEIGHT: {(weight * 0.1).toFixed(1)} kg</span>
          <span>HEIGHT: {(height * 0.1).toFixed(1)} m </span>
        </div>
        <PokemonStats stats={stats} />
        <PokemonAbilities abilities={abilities} />
      </section>
    </div>
  );
}
