import React from "react";
import "../scss/PokemonGridItem.scss";

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
    <div className="grid-item-container">
      <span className="pokemon-index">#{index}</span>
      <img className="pokemon-sprite" src={image} />
      <h3 className="pokemon-name">{upperCaseFirstLetter(name)}</h3>
    </div>
  );
}

const upperCaseFirstLetter = (word: string) => {
  const firstLetter = word[0].toLocaleUpperCase();
  return firstLetter + word.substring(1);
};
