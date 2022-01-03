import React from "react";
import PokemonStats from "./PokemonStats";
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";
import PokemonEvolutionChain from "./PokemonEvolutionChain";
import MaleGenderIcon from "../assets/male-gender-icon.svg";
import FemaleGenderIcon from "../assets/female-gender-icon.svg";
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
          <h3>Training</h3>
          <table className="stat-table">
            <tr className="stat-row">
              <th className="stat-name">Base Experience</th>
              <td className="stat-number">{baseExperience}</td>
            </tr>
            <tr className="stat-row">
              <th className="stat-name">Base Happiness</th>
              <td className="stat-number">{baseHappiness}</td>
            </tr>
            <tr className="stat-row">
              <th className="stat-name">Capture Rate</th>
              <td className="stat-number">
                {Math.round((captureRate / 255) * 100)}%
              </td>
            </tr>
            <tr className="stat-row">
              <th className="stat-name">Growth Rate</th>
              <td className="stat-number">{growthRate}</td>
            </tr>
          </table>
        </div>

        <div className="breeding-container">
          <h3>Breeding</h3>
          {genderRate !== -1 ? (
            <div className="gender-container">
              <table className="stat-table">
                <tr className="stat-row">
                  <th className="stat-name">
                    <span className="gender-type">Male</span>
                    <img
                      src={MaleGenderIcon}
                      alt="MaleGenderIcon"
                      className="gender-rate-icon"
                    />
                  </th>
                  <td className="stat-number">
                    {100 - Math.round((genderRate / 8) * 100)}%
                  </td>
                </tr>
                <tr className="stat-row">
                  <th className="stat-name">
                    <span className="gender-type">Female</span>
                    <img
                      src={FemaleGenderIcon}
                      alt="FemaleGenderIcon"
                      className="gender-rate-icon"
                    />
                  </th>
                  <td className="stat-number">
                    {Math.round((genderRate / 8) * 100)}%
                  </td>
                </tr>
              </table>
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
