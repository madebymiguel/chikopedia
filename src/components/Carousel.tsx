import React from "react";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/pokemon/Pokemon";
import PokedexEntry from "./PokedexEntry";
import { Link } from "react-router-dom";
import { MAX_POKEMON } from "../variables/globalVariables";

export interface CarouselProps {
  pokemon: Pokemon | null;
  pokemonId: number;
  finishedFetching: boolean;
}

export default function Carousel({
  pokemon,
  pokemonId,
  finishedFetching,
}: CarouselProps) {
  return (
    <div className="carousel-container">
      <div className="nav-buttons">
        {pokemonId > 1 && (
          <Link to={`/pokemon/${pokemonId - 1}`} className="nav-buttons prev">
            prev
          </Link>
        )}
      </div>
      <div className="carousel-content">
        {finishedFetching ? (
          pokemon !== null && (
            <PokedexEntry
              key={pokemon.id}
              name={pokemon.name}
              index={pokemon.id}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
              stats={pokemon.stats}
              weight={pokemon.weight}
              height={pokemon.height}
              abilities={pokemon.abilities}
            />
          )
        ) : (
          <span>...loading</span>
        )}
      </div>
      <div className="nav-buttons">
        {pokemonId < MAX_POKEMON && (
          <Link to={`/pokemon/${pokemonId + 1}`} className="nav-buttons next">
            next
          </Link>
        )}
      </div>
    </div>
  );
}
