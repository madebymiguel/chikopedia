import React from "react";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/pokemon/Pokemon";
import PokedexEntry from "./PokedexEntry";
import { Link } from "react-router-dom";
import { MAX_POKEMON } from "../variables/globalVariables";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { EvolutionChain } from "../types/evolutionChain/EvolutionChain";

export interface CarouselProps {
  pokemon: Pokemon | null;
  pokemonSpecies: PokemonSpecies | null;
  pokemonId: number;
  pokeball: string;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
  evolutionChain: EvolutionChain | null;
  finishedFetching: boolean;
  livingDex: boolean;
}

export default function Carousel({
  pokemon,
  pokemonSpecies,
  pokemonId,
  pokeball,
  setPokeball,
  evolutionChain,
  finishedFetching,
  livingDex,
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
          pokemon !== null &&
          pokemonSpecies !== null && (
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
              color={pokemonSpecies.color.name}
              isLegendary={pokemonSpecies.is_legendary}
              isMythical={pokemonSpecies.is_mythical}
              generation={pokemonSpecies.generation.name}
              habitat={pokemonSpecies.habitat.name}
              evolutionChain={evolutionChain}
              pokeball={pokeball}
              setPokeball={setPokeball}
              livingDex={livingDex}
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
