import React from "react";
import { Link } from "react-router-dom";
import PokedexEntry from "./PokedexEntry";
import LoadingComponent from "./LoadingComponent";
import ArrowBack from "../assets/arrow-back.svg";
import ArrowForward from "../assets/arrow-forward.svg";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/pokemon/Pokemon";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { PokemonSpeciesGenera } from "../types/pokemonSpecies/Genera";
import { PokemonSpeciesFlavorTextEntries } from "../types/pokemonSpecies/FlavorTextEntries";
import { MAX_POKEMON } from "../variables/globalVariables";

export interface CarouselProps {
  pokemon: Pokemon | null;
  pokemonSpecies: PokemonSpecies | null;
  pokemonId: number;
  pokeball: string;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
  evolutionChain: PokemonEvolutionTreeNode | null;
  finishedFetching: boolean;
  livingDex: boolean;
  handleBackButtonReset: () => void;
  backToLastHomeState: number;
  handleBackButtonState: (val: number) => void;
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
  handleBackButtonReset,
  backToLastHomeState,
  handleBackButtonState,
}: CarouselProps) {
  return (
    <div className="carousel-container">
      <input
        type="button"
        value="Go Back"
        className="back-to-main"
        onClick={handleBackButtonReset}
      ></input>

      <div
        className="prev"
        onClick={() => handleBackButtonState(backToLastHomeState)}
      >
        {pokemonId > 1 && (
          <Link to={`/pokemon/${pokemonId - 1}`} className="nav-buttons">
            <img
              src={ArrowBack}
              alt="back-arrow"
              className="arrow-image"
              title="Previous Pokemon"
            />
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
              baseExperience={pokemon.base_experience}
              //From PokemonSpecies
              genderRate={pokemonSpecies.gender_rate}
              captureRate={pokemonSpecies.capture_rate}
              isLegendary={pokemonSpecies.is_legendary}
              isMythical={pokemonSpecies.is_mythical}
              growthRate={pokemonSpecies.growth_rate.name}
              evolutionChain={evolutionChain}
              eggGroups={pokemonSpecies.egg_groups}
              eggCycle={pokemonSpecies.hatch_counter}
              generation={pokemonSpecies.generation.name}
              flavorTextEntries={
                (
                  pokemonSpecies.flavor_text_entries.find(
                    (text) => text.language.name === "en"
                  ) as PokemonSpeciesFlavorTextEntries
                ).flavor_text
              }
              genera={
                (
                  pokemonSpecies.genera.find(
                    (gen) => gen.language.name === "en"
                  ) as PokemonSpeciesGenera
                ).genus
              }
              baseHappiness={pokemonSpecies.base_happiness}
              // Extra
              pokeball={pokeball}
              setPokeball={setPokeball}
              livingDex={livingDex}
              backToLastHomeState={backToLastHomeState}
              handleBackButtonState={handleBackButtonState}
            />
          )
        ) : (
          <div className="carousel-content">
            <LoadingComponent />
          </div>
        )}
      </div>

      <div
        className="next"
        onClick={() => handleBackButtonState(backToLastHomeState)}
      >
        {pokemonId < MAX_POKEMON && (
          <Link to={`/pokemon/${pokemonId + 1}`} className="nav-buttons">
            <img
              src={ArrowForward}
              alt="forward-arrow"
              className="arrow-image"
              title="Next Pokemon"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
