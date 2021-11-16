import React, { useEffect, useState } from "react";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/Pokemon";
import PokedexEntry from "./PokedexEntry";
import { Link } from "react-router-dom";
import { MAX_POKEMON } from "../Variables/globalVariables";

export interface CarouselProps{
  pokemon: Pokemon | null,
  pokemonName: string | number
}

export default function Carousel({pokemon, pokemonName}: CarouselProps) {
  return (
    <div className="carousel-container">
      <div className="nav-buttons">
        {pokemonName > 1 && <Link to={`/pokemon/${+pokemonName - 1}`} className="nav-buttons prev">
          prev
        </Link>}
      </div>
      <div className="carousel-content">
        {pokemon !== null && (
          <PokedexEntry
            name={pokemon.name}
            index={pokemon.id}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            region={pokemon.id > 649 ? "unknown" : pokemon.game_indices[0].version.name}
            stats={pokemon.stats}
            weight={pokemon.weight}
            height={pokemon.height}
            abilities={pokemon.abilities}
          />
        )}
      </div>
      <div className="nav-buttons">
        {pokemonName < MAX_POKEMON && <Link to={`/pokemon/${+pokemonName + 1}`} className="nav-buttons next">
          next
        </Link>}
      </div>
    </div>
  );
}
