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
      <h3>{name}</h3>
      <h4>{index}</h4>
      <img src={image} />
    </div>
  );
}