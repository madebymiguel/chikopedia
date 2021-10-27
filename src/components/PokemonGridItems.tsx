import React from "react";
import { Link } from "react-router-dom";
import { fetchPokemon } from "../apis/fetchPokemon";
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
    <Link to={`/pokemon/${index}`}>
      <div className="grid-item-container">
        <span className="pokemon-index">#{index}</span>
        <img className="pokemon-sprite" src={image} />
        <h3 className="pokemon-name">{upperCaseFirstLetter(name)}</h3>
      </div>
    </Link>
  );
}
