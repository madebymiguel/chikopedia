import "../scss/PokemonStats.scss";
import { PokemonStat } from "../types/pokemon/Stat";

export interface PokemonStatProps {
  stats: PokemonStat[];
}

export default function PokemonStats({ stats }: PokemonStatProps) {
  const statAcronym = new Map<string, string>([
    ["hp", "HP"],
    ["attack", "ATK"],
    ["defense", "DEF"],
    ["special-attack", "SP. ATK"],
    ["special-defense", "SP. DEF"],
    ["speed", "SPD"],
  ]);

  return (
    <div className="pokemon-stat-container">
      <table className="stat-table">
        <tbody>
          <tr>
            {stats.map((statJSON) => {
              return (
                <th key={statJSON.stat.name} className="stat-name">
                  {statAcronym.get(statJSON.stat.name)}
                </th>
              );
            })}
          </tr>
          <tr>
            {stats.map((statJSON) => {
              return (
                <td key={statJSON.stat.name} className="stat-number">
                  {statJSON.base_stat}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
