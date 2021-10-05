import React, { useEffect, useState } from "react";
import "../scss/Carousel.scss";
import { Pokemon } from "../types/Pokemon";
import PokedexEntry from "./PokedexEntry";
import { fetchPokemon } from "../apis/fetchPokemon";

export default function Carousel(pokemon: Pokemon) {
  const [newPokemon, setNewPokemon] = useState<Pokemon>(pokemon);

  console.log("pokemon state from search is: ", pokemon);
  console.log("pokemon state from carousel is: ", newPokemon);

  // Function for fetching pokemon
  const getPokemon = (index: number) => {
    const res = fetchPokemon(index);
    res.then((pokemon) => {
      setNewPokemon(pokemon);
    });
  };

  // On the first load, get the stock pokemon, which is Pikachu
  useEffect(() => {
    getPokemon(pokemon.id);
  }, [pokemon]);

  return (
    <div className="carousel-container">
      <button
        id="prev"
        onClick={() => {
          if (newPokemon.id > 1) {
            getPokemon(newPokemon.id - 1);
          }
        }}
      >
        prev
      </button>

      <div className="carousel-content">
        <PokedexEntry
          name={newPokemon.name}
          index={newPokemon.id}
          image={newPokemon.sprites.front_default}
          types={newPokemon.types}
          region={newPokemon.game_indices[0].version.name}
          stats={newPokemon.stats}
          weight={newPokemon.weight}
          height={newPokemon.height}
          abilities={newPokemon.abilities}
        />
      </div>
      <button
        id="next"
        onClick={() => {
          if (newPokemon.id < 649) {
            getPokemon(newPokemon.id + 1);
          }
        }}
      >
        next
      </button>
    </div>
  );
}
