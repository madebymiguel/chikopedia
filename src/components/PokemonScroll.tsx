import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PokemonScrollElement from "./PokemonScrollElement";
import ArrowUpward from "../assets/arrow-upward.svg";
import ArrowDownward from "../assets/arrow-downward.svg";
import "../scss/PokemonScroll.scss";
import { SimplePokemon } from "../types/SimplePokemon";
import { MAX_POKEMON } from "../variables/globalVariables";

export interface PokemonScrollProps {
  allPokemon: SimplePokemon[];
  livingDex: boolean;
}

export default function PokemonScroll({
  allPokemon,
  livingDex,
}: PokemonScrollProps) {
  // display 7 pokemon list (one main, 3 prev and 3 next pokemon)
  // show only the main pokemon sprite
  // arrow will switch the main pokemon as well as the pokemon previous and next to main

  // moveUp
  // moveDown
  // generateItem

  // need to keep track of index
  // for loop should look index - 3 to index + 3

  const MAX_SCROLL_POKEMON = 7;

  const [currentIndex, setCurrentIndex] = useState(1);

  const currentSprite = allPokemon[currentIndex - 1].sprite;

  const pokemonScrollItems = useMemo(() => {
    const pokemonInScroll: SimplePokemon[] = [];

    for (
      let i = currentIndex - Math.round(MAX_SCROLL_POKEMON / 2);
      i < currentIndex + Math.floor(MAX_SCROLL_POKEMON / 2);
      i++
    ) {
      if (i >= 0 && i <= MAX_POKEMON) {
        const currentPokemon = allPokemon[i];
        pokemonInScroll.push(currentPokemon);
      }
    }

    return pokemonInScroll.map((pokemonObject: SimplePokemon) => {
      return (
        <PokemonScrollElement
          key={pokemonObject.id}
          name={pokemonObject.name}
          index={pokemonObject.id}
          livingDex={livingDex}
          active={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      );
    });
  }, [allPokemon, currentIndex]);

  return (
    <div className="pokemon-scroll-container">
      <div className="sprite">
        <Link to={`/pokemon/${currentIndex}`}>
          <img
            src={currentSprite}
            className="sprite-image"
            alt="pokemon-sprite"
          ></img>
        </Link>
      </div>

      <div className="pokemon-scroll-carousel">
        <div className="prev">
          {currentIndex > MAX_SCROLL_POKEMON && (
            <img
              src={ArrowUpward}
              alt="up-arrow"
              className="arrow-image"
              onClick={() => setCurrentIndex(currentIndex - MAX_SCROLL_POKEMON)}
            />
          )}
        </div>
        <div className="pokemon-scroll">{pokemonScrollItems}</div>
        <div className="next">
          {currentIndex < MAX_POKEMON - MAX_SCROLL_POKEMON - 1 && (
            <img
              src={ArrowDownward}
              alt="down-arrow"
              className="arrow-image"
              onClick={() => setCurrentIndex(currentIndex + MAX_SCROLL_POKEMON)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
