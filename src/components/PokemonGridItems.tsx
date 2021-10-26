import React from "react";
// import { useHistory } from "react-router-dom";
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
  function redirect() {
    fetchPokemon(index);
    // console.log(history.pushState("pokemon", `pokemon/${index}`));
  }

  return (
    <div className="grid-item-container" onClick={redirect}>
      <span className="pokemon-index">#{index}</span>
      <img className="pokemon-sprite" src={image} />
      <h3 className="pokemon-name">{upperCaseFirstLetter(name)}</h3>
    </div>
  );
}
