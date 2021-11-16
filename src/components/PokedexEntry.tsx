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
        <div className="title">
          <h2>{upperCaseFirstLetter(name)}</h2>
          <p>{index}</p>
        </div>
        <div className="sprite">
          <img src={image} className="sprite-image"></img>
        </div>
      </section>

      <section className="pokedex-detailed-info">
        <div className="pokemon-type-container">
          <PokemonTypes types={types} />
        </div>
        <p>Found In: {region === undefined ? "unknown" : region}</p>
        <p>
          {" "}
          weight: {(weight * 0.1).toFixed(1)} kg, height: {(height * 0.1).toFixed(1)} m{" "}
        </p>
        <PokemonStats stats={stats} />
        <PokemonAbilities abilities={abilities} />
      </section>
    </div>
  );
}
