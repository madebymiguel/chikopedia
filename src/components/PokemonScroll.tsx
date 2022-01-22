import { useMemo } from "react";
import { Link } from "react-router-dom";
import PokemonScrollElement from "./PokemonScrollElement";
import ArrowDownward from "../assets/arrow-downward.svg";
import ArrowUpward from "../assets/arrow-upward.svg";
import ArrowBottom from "../assets/go-bottom.svg";
import ArrowTop from "../assets/go-top.svg";
import "../scss/PokemonScroll.scss";
import { SimplePokemon } from "../types/SimplePokemon";
import { MAX_POKEMON } from "../variables/globalVariables";

export interface PokemonScrollProps {
  pokemonInScroll: SimplePokemon[];
  currentIndex: number;
  currentSprite: string;
  maxScrollPokemon: number;
  handlePokemonScrollPosition: (index: number) => void;
  livingDex: boolean;
  backToLastHomeState: number;
  handleBackButtonState: (val: number) => void;
}

export default function PokemonScroll({
  pokemonInScroll,
  currentIndex,
  currentSprite,
  maxScrollPokemon,
  handlePokemonScrollPosition,
  livingDex,
  backToLastHomeState,
  handleBackButtonState,
}: PokemonScrollProps) {
  const pokemonScrollItems = useMemo(() => {
    return pokemonInScroll.map((pokemonObject: SimplePokemon) => {
      return (
        <PokemonScrollElement
          key={pokemonObject.id}
          name={pokemonObject.name}
          index={pokemonObject.id}
          livingDex={livingDex}
          active={currentIndex}
          handlePokemonScrollPosition={handlePokemonScrollPosition}
        />
      );
    });
  }, [pokemonInScroll, currentIndex]);

  return (
    <div className="pokemon-scroll-container">
      <div className="sprite">
        <Link to={`/pokemon/${currentIndex}`}>
          <img
            src={currentSprite}
            className="sprite-image"
            alt="pokemon-sprite"
            onClick={() => handleBackButtonState(backToLastHomeState)}
          ></img>
        </Link>
      </div>

      <div className="pokemon-scroll-carousel">
        <div className="prev">
          {currentIndex > 1 && (
            <div className="arrow-container">
              <img
                src={ArrowUpward}
                alt="up-arrow"
                className="arrow-image prev-next"
                title="Previous"
                onClick={() =>
                  handlePokemonScrollPosition(
                    Math.max(1, currentIndex - maxScrollPokemon)
                  )
                }
              />

              <img
                src={ArrowTop}
                alt="top-arrow"
                className="arrow-image"
                title="Go to First Pokemon"
                onClick={() => handlePokemonScrollPosition(1)}
              />
            </div>
          )}
        </div>

        <div className="pokemon-scroll">{pokemonScrollItems}</div>

        <div className="next">
          {currentIndex < MAX_POKEMON && (
            <div className="arrow-container">
              <img
                src={ArrowDownward}
                alt="down-arrow"
                className="arrow-image prev-next"
                title="Next"
                onClick={() =>
                  handlePokemonScrollPosition(
                    Math.min(MAX_POKEMON, currentIndex + maxScrollPokemon)
                  )
                }
              />

              <img
                src={ArrowBottom}
                alt="arrow-bottom"
                className="arrow-image"
                title="Go to Last Pokemon"
                onClick={() => handlePokemonScrollPosition(MAX_POKEMON)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
