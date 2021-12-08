import "../scss/PokedexEntry.scss";
import React from "react";
import { PokemonType } from "../types/pokemon/Type";
import { PokemonStat } from "../types/pokemon/Stat";
import { PokemonAbility } from "../types/pokemon/Ability";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";
import PokemonAbilities from "./PokemonAbilities";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";
import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";
import { handlePokeballColorChange } from "../utils/handlePokeballColorChange";
import PokemonEvolutionChain from "./PokemonEvolutionChain";

export interface PokedexEntryProps {
  //From Pokemon
  name: string;
  index: number;
  image: string;
  types: PokemonType[];
  stats: PokemonStat[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  //From PokemonSpecies
  genderRate: number;
  captureRate: number;
  isLegendary: boolean;
  isMythical: boolean;
  growthRate: string;
  eggGroups: string;
  color: string;
  habitat: string;
  generation: string;
  evolutionChain: EvolutionChain | null;
  pokeball: string;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
  livingDex: boolean;
}

export default function PokedexEntry({
  name,
  index,
  image,
  types,
  stats,
  weight,
  height,
  abilities,
  genderRate,
  captureRate,
  isLegendary,
  isMythical,
  growthRate,
  eggGroups,
  color,
  habitat,
  generation,
  evolutionChain,
  pokeball,
  setPokeball,
  livingDex,
}: PokedexEntryProps) {
  return (
    <div className="pokedex-entry-container">
      <section className="pokedex-screen">
        <div className="header">
          <h2 className="title">{upperCaseFirstLetter(name)}</h2>
          <h2 className="index">#{index}</h2>
          {livingDex && (
            <input
              type="image"
              src={pokeball}
              alt="pokeball"
              className="pokeball"
              onClick={() =>
                handlePokeballColorChange({ pokeball, index, setPokeball })
              }
            />
          )}
        </div>
        <div className="sprite">
          <img src={image} className="sprite-image"></img>
        </div>
      </section>

      <section className="pokedex-detailed-info">
        <PokemonTypes types={types} />
        <div className="description">
          <span>WEIGHT: {(weight * 0.1).toFixed(1)} kg</span>
          <span>HEIGHT: {(height * 0.1).toFixed(1)} m </span>
        </div>
        <div className="extra">
          <span>
            Gender Rate: Male: ({100 - Math.round((genderRate / 8) * 100)}
            %) Female: ({Math.round((genderRate / 8) * 100)}%)
          </span>
          <span>
            Capture Rate: {captureRate} ({Math.round((captureRate / 255) * 100)}
            %)
          </span>
          {isLegendary && <span> Legendary </span>}
          {isMythical && <span> Mythical </span>}
          <span>Growth Rate: {growthRate}</span>
          <span>Egg Groups: {eggGroups}</span>
          {/* <span>COLOR: {color} </span> */}
          <span>HABITAT: {habitat} </span>
          <span>GENERATION: {generation} </span>
        </div>
        <PokemonStats stats={stats} />
        <PokemonAbilities abilities={abilities} />
        <PokemonEvolutionChain evolutionChain={evolutionChain} />
      </section>
    </div>
  );
}
