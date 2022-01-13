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
import formatGeneration from "../utils/formatGeneration";
import removeDash from "../utils/removeDash";
import { PokemonSpeciesEggGroups } from "../types/pokemonSpecies/EggGroups";
import PokemonEggGroups from "./PokemonEggGroups";

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
  eggGroups: PokemonSpeciesEggGroups[];
  eggCycle: number;
  generation: string;
  flavorTextEntries: string;
  genera: string;
  evolutionChain: PokemonEvolutionTreeNode | null;
  baseHappiness: number;
  pokeball: string;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
  livingDex: boolean;
  backToLastHomeState: number;
  setBackButton: (val: number) => void;
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
  eggGroups,
  eggCycle,
  flavorTextEntries,
  genera,
  generation,
  pokeball,
  setPokeball,
  livingDex,
  evolutionChain,
  baseHappiness,
  backToLastHomeState,
  setBackButton,
}: PokedexEntryProps) {
  return (
    // the description parts can be refactored into react component
    <div className="pokedex-entry-container">
      <div className="header">
        <div className="pokemon-name-container">
          <h2 className="pokemon-name">{upperCaseFirstLetter(name)}</h2>
          {isLegendary && <span>Legendary</span>}
          {isMythical && <span>Mythical</span>}
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
        <img src={image} className="sprite-image" alt="pokemon-sprite"></img>
      </div>

      <div className="pokedex-data-container">
        <h3 className="sub-title">Pokedex Data</h3>
        <table className="table-formatter">
          <tbody className="table-body-formatter">
            <tr className="table-row-formatter">
              <th className="table-header-formatter">National No.</th>
              <td className="table-data-formatter">{formatIndex(index)}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Generation</th>
              <td className="table-data-formatter">
                {formatGeneration(generation)}
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Species</th>
              <td className="table-data-formatter">{genera}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Type</th>
              <td className="table-data-formatter">
                <PokemonTypes types={types} />
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Height</th>
              <td className="table-data-formatter">
                {(height * 0.1).toFixed(1)} m
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Weight</th>
              <td className="table-data-formatter">
                {(weight * 0.1).toFixed(1)} kg
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Abilities</th>
              <td className="table-data-formatter">
                <PokemonAbilities abilities={abilities} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="description-container">
        <h3 className="sub-title">Pokedex Entry</h3>
        <span className="text">{flavorTextEntries}</span>
      </div>

      <div className="training-container">
        <h3 className="sub-title">Training</h3>
        <table className="table-formatter">
          <tbody className="table-body-formatter">
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Base Experience</th>
              <td className="table-data-formatter">{baseExperience}</td>
            </tr>
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Base Happiness</th>
              <td className="table-data-formatter">{baseHappiness}</td>
            </tr>
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Capture Rate</th>
              <td className="table-data-formatter">{captureRate}</td>
            </tr>
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Growth Rate</th>
              <td className="table-data-formatter">{removeDash(growthRate)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="breeding-container">
        <h3 className="sub-title">Breeding</h3>
        <>
          <table className="table-formatter">
            <tbody className="table-body-formatter">
              <tr className="table-row-formatter">
                <th className="table-header-formatter">Gender</th>
                <td className="table-data-formatter">
                  {genderRate !== -1 ? (
                    <>
                      <span>
                        Male: {100 - Math.round((genderRate / 8) * 100)}%,{" "}
                      </span>
                      <span>
                        Female: {Math.round((genderRate / 8) * 100)}%{" "}
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Genderless</span>
                    </>
                  )}
                </td>
              </tr>
              <tr className="table-row-formatter">
                <th className="table-header-formatter">Egg Group</th>
                <td className="table-data-formatter">
                  <PokemonEggGroups eggGroups={eggGroups} />
                </td>
              </tr>
              <tr className="table-row-formatter">
                <th className="table-header-formatter">Egg Cycle</th>
                <td className="table-data-formatter">{eggCycle}</td>
              </tr>
            </tbody>
          </table>
        </>
      </div>

      <div className="stat-container">
        <h3 className="sub-title">Base Stats</h3>
        <PokemonStats stats={stats} />
      </div>

      <div className="evolution-container">
        <h3 className="sub-title">Evolutions</h3>
        {evolutionChain !== null && (
          <PokemonEvolutionChain
            evolutionChain={evolutionChain}
            backToLastHomeState={backToLastHomeState}
            setBackButton={setBackButton}
          />
        )}
      </div>
    </div>
  );
}
