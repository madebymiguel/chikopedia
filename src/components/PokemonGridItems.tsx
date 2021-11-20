import React from "react";
import { Link } from "react-router-dom";
import "../scss/PokemonGridItem.scss";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";

export interface PokemonGridItemsProps {
  name: string;
  index: number;
  image: string;
}

export default function PokemonGridItems({
  name,
  index,
  image,
}: PokemonGridItemsProps) {
  return (
    <Link to={`/pokemon/${index}`} className="link">
      <div className="grid-item-container">
        <span className="pokemon-index">#{index}</span>
        <img className="pokemon-sprite" src={image} />
        <h4 className="pokemon-name">{upperCaseFirstLetter(name)}</h4>
      </div>
    </Link>
  );
}
