import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/PokemonGridItem.scss";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import {
  addToLivingDexSet,
  getLivingDexSet,
  removeFromLivingDexSet,
} from "../utils/caughtPokemonStorage";

export interface PokemonGridItemsProps {
  name: string;
  index: number;
  image: string;
  livingDex: boolean;
}

export default function PokemonGridItems({
  name,
  index,
  image,
  livingDex,
}: PokemonGridItemsProps) {
  const livingDexStorage = getLivingDexSet();

  const [pokeball, setPokeball] = useState(
    livingDexStorage[index] ? redPokeball : greyPokeball
  );

  console.log(livingDexStorage);

  function handlePokeballColorChange() {
    // If a pokeball was selected, and we now toggle to remove it
    if (pokeball === redPokeball) {
      removeFromLivingDexSet(index);
      setPokeball(greyPokeball);
    } else {
      addToLivingDexSet(index);
      setPokeball(redPokeball);
    }
  }

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
