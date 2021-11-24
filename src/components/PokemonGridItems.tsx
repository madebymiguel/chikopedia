import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/PokemonGridItem.scss";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";

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
  const [pokeball, setPokeball] = useState(greyPokeball);
  const [toggle, setToggle] = useState(false);

  function handlePokeballColorChange() {
    if (toggle) {
      setPokeball(greyPokeball);
    } else {
      setPokeball(redPokeball);
    }
    setToggle(!toggle);
  }

  return (
    <div className="grid-item-container">
      <div className="grid-item-header">
        <span className="pokemon-index">#{index}</span>
        <input
          type="image"
          src={pokeball}
          alt="pokeball"
          className="pokeball"
          onClick={handlePokeballColorChange}
        />
      </div>
      <Link to={`/pokemon/${index}`} className="link">
        <img className="pokemon-sprite" src={image} />
        <h4 className="pokemon-name">{upperCaseFirstLetter(name)}</h4>
      </Link>
    </div>
  );
}
