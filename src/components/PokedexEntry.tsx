import React from "react";
import PokemonStats from "./PokemonStats";
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";
import PokemonEvolutionChain from "./PokemonEvolutionChain";
import "../scss/PokedexEntry.scss";
import { PokemonType } from "../types/pokemon/Type";
import { PokemonStat } from "../types/pokemon/Stat";
import { PokemonAbility } from "../types/pokemon/Ability";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";
import { handlePokeballColorChange } from "../utils/handlePokeballColorChange";
import formatIndex from "../utils/formatIndex";

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
  baseExperience: number;
  //From PokemonSpecies
  genderRate: number;
  captureRate: number;
  isLegendary: boolean;
  isMythical: boolean;
  growthRate: string;
  // eggGroups: EggGroups[];
  generation: string;
  flavorTextEntries: string;
  genera: string;
  evolutionChain: PokemonEvolutionTreeNode | null;
  baseHappiness: number;
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
  baseExperience,
  genderRate, // genderRate = -1 means no gender
  captureRate,
  isLegendary,
  isMythical,
  growthRate,
  // eggGroups,
  flavorTextEntries,
  genera,
  generation,
  pokeball,
  setPokeball,
  livingDex,
  evolutionChain,
  baseHappiness,
}: PokedexEntryProps) {
  return (
    // the description parts can be refactored into react component
    <div className="pokedex-entry-container">
      <div className="header">
        <div className="title-container">
          <h2 className="title">{upperCaseFirstLetter(name)}</h2>
        </div>
        <div className="index-container">
          <h2 className="index">#{formatIndex(index)}</h2>
        </div>
        <div className="pokeball-container">
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
      </div>
      <div className="sprite">
        <img src={image} className="sprite-image"></img>
      </div>

      <div className="types-container">
        <PokemonTypes types={types} />
      </div>

      <div className="flavor-text-container">{flavorTextEntries}</div>

      <div className="description">
        <div className="generation">
          <span className=""> {generation} </span>
        </div>

        <div className="genera-container">{genera}</div>

        <div className="height-container">
          <span className="">HEIGHT</span>
          <span className="">{(height * 0.1).toFixed(1)} m</span>
        </div>

        <div className="weight-container">
          <span className="">WEIGHT</span>
          <span className=""> {(weight * 0.1).toFixed(1)} kg </span>
        </div>

        {isLegendary && <div> Legendary </div>}
        {isMythical && <div> Mythical </div>}
      </div>

      <div className="details-container">
        <div className="training-container">
          <div className="base-experience-container">
            <span className="base-experience-title">Base Experience</span>
            <span className="">{baseExperience}</span>
          </div>

          <div className="base-happiness-container">
            <span className="base-happiness-title">baseHappiness</span>
            <span className="base-happiness-content">{baseHappiness}</span>
          </div>

          <div className="capture-rate-container">
            <div className="capture-rate-title">Capture Rate</div>
            <div className="capture-rate-content">
              ({Math.round((captureRate / 255) * 100)}%)
            </div>
          </div>
          <div className="growth-rate-container">
            <div className="growth-rate-title"> Growth Rate </div>
            <div className="growth-rate-content"> {growthRate} </div>
          </div>
        </div>

        <div className="breeding-container">
          <span>GENDER</span>
          {genderRate !== -1 ? (
            <div className="gender-container">
              <div className="gender-rate-container">
                <span className="gender-rate-title">Male</span>
                <span className="gender-rate-content">
                  {100 - Math.round((genderRate / 8) * 100)}%
                </span>
              </div>

              <div className="gender-rate-container">
                <span className="gender-rate-title">Female</span>
                <span className="gender-rate-content">
                  {Math.round((genderRate / 8) * 100)}%
                </span>
              </div>
            </div>
          ) : (
            <div className="gender-container">
              <span>Genderless</span>
            </div>
          )}
        </div>
      </div>

      <div className="abilites-container">
        <PokemonAbilities abilities={abilities} />
      </div>

      <div className="stats-container">
        <PokemonStats stats={stats} />
      </div>

      <div className="evolution-container">
        {evolutionChain !== null && (
          <PokemonEvolutionChain evolutionChain={evolutionChain} />
        )}
      </div>
    </div>
  );
}
