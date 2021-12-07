import "../scss/PokemonStats.scss";
import React from "react";
import { PokemonStat } from "../types/pokemon/Stat";

export interface PokemonStatProps {
  stats: PokemonStat[];
}

export default function PokemonStats({ stats }: PokemonStatProps) {
  return (
    <div className="pokemon-stat-container">
      <table className="stat-table">
        <tr>
          {stats.map((statJSON) => {
            return <th className="stat-name"> {statJSON.stat.name} </th>;
          })}
        </tr>
        <tr>
          {stats.map((statJSON) => {
            return <td className="stat-number"> {statJSON.base_stat} </td>;
          })}
        </tr>
      </table>
    </div>
  );
}
