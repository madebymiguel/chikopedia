import "../scss/PokedexEntry.scss";
import React from "react";
import { PokemonType } from "../types/pokemon/Type";
import { PokemonStat } from "../types/pokemon/Stat";
import { PokemonAbility } from "../types/pokemon/Ability";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";
import PokemonAbilities from "./PokemonAbilities";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";
import { handlePokeballColorChange } from "../utils/handlePokeballColorChange";
import PokemonEvolutionChain from "./PokemonEvolutionChain";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";

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
  evolutionChain: PokemonEvolutionTreeNode | null;
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
  genderRate, // genderRate = -1 means no gender
  captureRate,
  isLegendary,
  isMythical,
  growthRate,
  eggGroups,
  color, // can be used for theme color for each pokemon
  habitat, // can be used for background theme
  generation,
  evolutionChain,
  pokeball,
  setPokeball,
  livingDex,
}: PokedexEntryProps) {
  return (
    // the description parts can be refactored into react component
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
          <div id="height">
            <div id="height-title"> HEIGHT </div>
            <div id="height-content"> {(height * 0.1).toFixed(1)} m </div>
          </div>
          <div id="weight">
            <div id="weight-title"> WEIGHT </div>
            <div id="weight-content"> {(weight * 0.1).toFixed(1)} kg </div>
          </div>
        </div>
        <div className="extra">
          <div className="rates">
            <div id="gender-rate">
              <div id="gender-rate-title"> GENDER</div>
              <div id="gender-rate-content">
                <div className="gender-rate-gender">
                  <div className="gender-rate-title">Male</div>
                  <div className="gender-rate-content">
                    {100 - Math.round((genderRate / 8) * 100)}%
                  </div>
                </div>
                <div className="gender-rate-gender">
                  <div className="gender-rate-title">Female</div>
                  <div className="gender-rate-content">
                    {Math.round((genderRate / 8) * 100)}%
                  </div>
                </div>
              </div>
            </div>
            <div id="capture-rate">
              <div id="capture-rate-title">Capture Rate</div>
              <div id="capture-rate-content">
                {captureRate} ({Math.round((captureRate / 255) * 100)}%)
              </div>
            </div>
            <div id="growth-rate">
              <div id="growth-rate-title"> Growth Rate </div>
              <div id="growth-rate-content"> {growthRate} </div>
            </div>
          </div>
          <div className="groups">
            <div id="egg-groups">
              <div id="egg-groups-title"> Egg Groups </div>
              <div id="egg-groups-content"> {eggGroups} </div>
            </div>
            <div id="generation">
              <div id="generation-title"> GENERATION </div>
              <div id="generation-content"> {generation} </div>
            </div>
          </div>
          {isLegendary && <div> Legendary </div>}
          {isMythical && <div> Mythical </div>}
        </div>
        <PokemonStats stats={stats} />
        <PokemonAbilities abilities={abilities} />
        <PokemonEvolutionChain evolutionChain={evolutionChain} />
      </section>
    </div>
  );
}
