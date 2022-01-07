import "../scss/PokemonStats.scss";
import { PokemonStat } from "../types/pokemon/Stat";

export interface PokemonStatProps {
  stats: PokemonStat[];
}

export default function PokemonStats({ stats }: PokemonStatProps) {
  return (
    <div className="pokemon-stat-container">
      <table className="stat-table">
        <tbody>
          <tr>
            {stats.map((statJSON) => {
              return (
                <th key={statJSON.stat.name} className="stat-name">
                  {statJSON.stat.name}
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
