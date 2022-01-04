import React from "react";
import { Link } from "react-router-dom";
import PokedexEntry from "./PokedexEntry";
import ArrowBack from "../assets/arrow-back.svg";
import ArrowForward from "../assets/arrow-forward.svg";
import redPokeball from "../assets/red-pokeball.svg";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/pokemon/Pokemon";
import { PokemonSpecies } from "../types/pokemonSpecies/PokemonSpecies";
import { PokemonEvolutionTreeNode } from "../types/PokemonEvolutionTreeNode";
import { MAX_POKEMON } from "../variables/globalVariables";
import { PokemonSpeciesGenera } from "../types/pokemonSpecies/Genera";
import { PokemonSpeciesFlavorTextEntries } from "../types/pokemonSpecies/FlavorTextEntries";

export interface CarouselProps {
  pokemon: Pokemon | null;
  pokemonSpecies: PokemonSpecies | null;
  pokemonId: number;
  pokeball: string;
  setPokeball: React.Dispatch<React.SetStateAction<string>>;
  evolutionChain: PokemonEvolutionTreeNode | null;
  finishedFetching: boolean;
  livingDex: boolean;
  handleBack: () => void;
  lastState: number;
  setLastState: React.Dispatch<React.SetStateAction<number>>;
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
  handleBack,
  lastState,
  setLastState,
}: CarouselProps) {
  return (
    <div className="carousel-container">
      <button className="back-to-main" onClick={handleBack}>
        Back
      </button>
      <div className="prev" onClick={() => setLastState(lastState - 1)}>
        {pokemonId > 1 && (
          <Link to={`/pokemon/${pokemonId - 1}`} className="nav-buttons">
            <img src={ArrowBack} alt="back-arrow" />
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
              //Right now just pull the first egg group
              // eggGroups={
              //   pokemonSpecies.egg_groups.length > 0
              //     ? pokemonSpecies.egg_groups
              //     : "Unknown"
              // }
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
              pokeball={pokeball}
              setPokeball={setPokeball}
              livingDex={livingDex}
            />
          )
        ) : (
          <img
            className=".loading-img"
            src={redPokeball}
            alt="pokball loading"
          />
        )}
      </div>
      <div className="next" onClick={() => setLastState(lastState - 1)}>
        {pokemonId < MAX_POKEMON && (
          <Link to={`/pokemon/${pokemonId + 1}`} className="nav-buttons">
            <img src={ArrowForward} alt="forward-arrow" />
          </Link>
        )}
      </div>
    </div>
  );
}
