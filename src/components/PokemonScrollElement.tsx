import greyPokeball from "../assets/grey-pokeball.svg";
import redPokeball from "../assets/red-pokeball.svg";
import upperCaseFirstLetter from "../utils/upperCaseFirstLetter";
import { handlePokeballColorChange } from "../utils/handlePokeballColorChange";
import { getLivingDexSetFromSessionStorage } from "../utils/getLivingDexSetFromSessionStorage";
import formatIndex from "../utils/formatIndex";
import { useState } from "react";
import "../scss/PokemonScrollElement.scss";

export interface PokemonScrollElementProps {
  name: string;
  index: number;
  livingDex: boolean;
  active: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function PokemonScrollElement({
  name,
  index,
  livingDex,
  active,
  setCurrentIndex,
}: PokemonScrollElementProps) {
  const livingDexStorage = getLivingDexSetFromSessionStorage();

  const [pokeball, setPokeball] = useState(
    livingDexStorage[index] ? redPokeball : greyPokeball
  );

  const level = Math.abs(active - index);

  const containerClassName = "scroll-element-container level" + level;
  return (
    <div className={containerClassName}>
      <div className="pokeball-container">
        {livingDex && (
          <input
            type="image"
            src={pokeball}
            alt="pokeball"
            className="pokeball"
            onClick={() => {
              if (livingDex) {
                handlePokeballColorChange({ pokeball, index, setPokeball });
              }
            }}
          />
        )}
      </div>
      <div
        className="scroll-element-content"
        onClick={() => {
          setCurrentIndex(index);
        }}
      >
        <span className="pokemon-index">#{formatIndex(index)}</span>
        <h2 className="pokemon-name">{upperCaseFirstLetter(name)}</h2>
      </div>
    </div>
  );
}
