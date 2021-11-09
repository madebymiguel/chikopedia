import React, { useEffect, useState } from "react";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/Pokemon";
import PokedexEntry from "./PokedexEntry";
import { fetchPokemon } from "../apis/fetchPokemon";
import { Link, RouteComponentProps, useParams } from "react-router-dom";

// {
//   match,
// }: RouteComponentProps<{ pokemonName: string }>
// const { pokemonid }: MatchParams = match.params;

interface MatchParams {
  pokemonName: string;
}

export default function Carousel({ pokemonName }: MatchParams) {
  // const { pokemonName } = match.params;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [finishedFetching, setFinishedFetching] = useState(false);
  // Function for fetching pokemon
  const getPokemon = (index: string | number) => {
    const res = fetchPokemon(index);
    res.then((pokemon) => {
      setPokemon(pokemon);
      setFinishedFetching(true);
    });
  };

  // On the first load, get the stock pokemon, which is Pikachu
  useEffect(() => {
    if (pokemonName !== "") {
      getPokemon(pokemonName);
    }
  }, [pokemonName]);

  // previous and next button with current version of code might collide with router implementation.
  return (
    <div className="carousel-container">
      <div className="nav-buttons">
        <Link to={`/pokemon/${+pokemonName - 1}`} className="nav-buttons prev">
          prev
        </Link>
      </div>
      <div className="carousel-content">
        {pokemon !== null && (
          <PokedexEntry
            name={pokemon.name}
            index={pokemon.id}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            region={pokemon.game_indices[0].version.name}
            stats={pokemon.stats}
            weight={pokemon.weight}
            height={pokemon.height}
            abilities={pokemon.abilities}
          />
        )}
      </div>
      <div className="nav-buttons">
        <Link to={`/pokemon/${+pokemonName + 1}`} className="nav-buttons next">
          next
        </Link>
      </div>
    </div>
  );
}
