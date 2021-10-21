import React, { useEffect, useState } from "react";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/Pokemon";
import PokedexEntry from "./PokedexEntry";
import { fetchPokemon } from "../apis/fetchPokemon";

export interface PokemonNameProps {
  pokemonName: string | number
}

export default function Carousel({pokemonName}: PokemonNameProps) {
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
    if(pokemonName !== "") {
      getPokemon(pokemonName);
    }
  }, [pokemonName]);

  // previous and next button with current version of code might collide with router implementation.
  return (
    <div>
      
      {finishedFetching ? (
        <div className="carousel-container">
        <button
          id="prev"
          onClick={() => {
            if (pokemon !== null && pokemon.id > 1) {
              setFinishedFetching(false);
              getPokemon(pokemon.id - 1);
            }
          }}
        >
          prev
        </button>
  
        <div className="carousel-content">
          {pokemon !== null && <PokedexEntry
            name={pokemon.name}
            index={pokemon.id}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            region={pokemon.game_indices[0].version.name}
            stats={pokemon.stats}
            weight={pokemon.weight}
            height={pokemon.height}
            abilities={pokemon.abilities}
          />}       
        </div>
        <button
          id="next"
          onClick={() => {
            if (pokemon !== null && pokemon.id < 649) {
              setFinishedFetching(false);
              getPokemon(pokemon.id + 1);
            }
          }}
        >
          next
        </button>
      </div>
        
      ) : (<span> Type Pokemon above </span>)
      }
    </div>
    
  );
}
