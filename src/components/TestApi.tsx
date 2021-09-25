import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../apis/fetchPokemon";
import { Pokemon } from '../types/ApiResponseTypes';
import PokedexEntry from "./PokedexEntry";

export default function Search() {
  // doesnt work with pokemon higher than 649
  // const pokemonNum: number = 649;
  const [search, setSearch] = useState("pikachu");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  console.log('pokemon state is: ', pokemon)

  // Function for fetching pokemon
  const getPokemon = () => {
    const res = fetchPokemon(search);
    res.then((pokemon) => {
      setPokemon(pokemon);
    })
  }

  // On the first load, get the stock pokemon, which is Pikachu
  useEffect(() => {
    getPokemon();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getPokemon();
  }

  return (
    <div>
      <p>Pokedex Search</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button>Get Pokemon</button>
      </form>

      {pokemon !== null &&
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
      }
    </div>
  );
};


