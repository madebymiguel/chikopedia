import React from "react";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/pokemon/Pokemon";
import PokedexEntry from "./PokedexEntry";
import { Link } from "react-router-dom";
import { MAX_POKEMON } from "../variables/globalVariables";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";

export interface CarouselProps {
  pokemon: Pokemon | null;
  pokemonSpecies: PokemonSpecies | null;
  pokemonId: number;
  pokeball: string;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
  evolutionChain: PokemonEvolutionTreeNode | null;
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
              //From Pokemon
              name={pokemon.name}
              index={pokemon.id}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
              stats={pokemon.stats}
              weight={pokemon.weight}
              height={pokemon.height}
              abilities={pokemon.abilities}
              //From PokemonSpecies
              genderRate={pokemonSpecies.gender_rate}
              captureRate={pokemonSpecies.capture_rate}
              isLegendary={pokemonSpecies.is_legendary}
              isMythical={pokemonSpecies.is_mythical}
              growthRate={pokemonSpecies.growth_rate.name}
              evolutionChain={evolutionChain}
              //Right now just pull the first egg group
              eggGroups={
                pokemonSpecies.egg_groups.length < 0
                  ? pokemonSpecies.egg_groups[0].name
                  : "Unknown"
              }
              color={pokemonSpecies.color.name}
              habitat={
                pokemonSpecies.habitat === null
                  ? "Unknown"
                  : pokemonSpecies.habitat.name
              }
              generation={pokemonSpecies.generation.name}
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
