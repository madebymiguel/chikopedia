import { useState } from "react";
import { Link } from "react-router-dom";
import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import "../scss/PokemonGridItem.scss";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";
import { handlePokeballColorChange } from "../utils/handlePokeballColorChange";
import { getLivingDexSet } from "../utils/getLivingDexSet";
import formatIndex from "../utils/formatIndex";

export interface PokemonGridItemProps {
  name: string;
  index: number;
  image: string;
  livingDex: boolean;
}

export default function PokemonGridItem({
  name,
  index,
  image,
  livingDex,
}: PokemonGridItemProps) {
  const livingDexStorage = getLivingDexSet();

  const [pokeball, setPokeball] = useState(
    livingDexStorage[index] ? redPokeball : greyPokeball
  );

  return (
    <div className="grid-item-container">
      <div
        className="grid-item-header"
        onClick={() => {
          if (livingDex) {
            handlePokeballColorChange({ pokeball, index, setPokeball });
          }
        }}
      >
        <span className="pokemon-index">#{formatIndex(index)}</span>
        {livingDex && (
          <input
            type="image"
            src={pokeball}
            alt="pokeball"
            className="pokeball"
          />
        )}
      </div>
      <Link to={`/pokemon/${index}`} className="link">
        <img className="pokemon-sprite" src={image} alt={name} />
        <h2 className="pokemon-name">{upperCaseFirstLetter(name)}</h2>
      </Link>
    </div>
  );
}
