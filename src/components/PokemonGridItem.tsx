import React from "react";
import { Link } from "react-router-dom";
import "../scss/PokemonGridItem.scss";

import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";

export interface PokemonGridItemProps {
  name: string;
  index: number;
  image: string;
  livingDex: boolean;
  pokeball: string;
  handlePokeballColorChange: () => void;
}

export default function PokemonGridItem({
  name,
  index,
  image,
  livingDex,
  pokeball,
  handlePokeballColorChange,
}: PokemonGridItemProps) {
  return (
    <div className="grid-item-container">
      <div className="grid-item-header">
        <span className="pokemon-index">#{index}</span>
        {livingDex && (
          <input
            type="image"
            src={pokeball}
            alt="pokeball"
            className="pokeball"
            onClick={handlePokeballColorChange}
          />
        )}
      </div>
      <Link to={`/pokemon/${index}`} className="link">
        <img className="pokemon-sprite" src={image} />
        <h4 className="pokemon-name">{upperCaseFirstLetter(name)}</h4>
      </Link>
    </div>
  );
}
