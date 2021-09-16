import React, { FunctionComponent, useState, useEffect } from "react";
import { PokemonData } from "./ApiResponseTypes";
import PokedexEntry from "./PokedexEntry";

const Search: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    void fetchPokemon(152);
  }, []);

  async function fetchPokemon(index: number) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);

    const json = await res.json();

    console.log(json.name);
    console.log(json.id);
    console.log(json.sprites.front_default);
    console.log(json.types[0].type.name);
    console.log(json.game_indices[0].version.name);

    // setPokemon(json.pokemon);

    const jsonObject = {
      name: json.name,
      index: json.id,
      image: json.sprites.front_default,
      type: json.types[0].type.name,
      region: json.game_indices[0].version.name,
    };

    setPokemon(jsonObject); // Miguel broke this

    console.log(pokemon);
    console.log(jsonObject);
  }

  return (
    <div>
      <p>ApiCall</p>
      <button onClick={() => fetchPokemon(152)}>Get Pokemon</button>

      {/* <PokedexEntry pokemon={pokemon}/> */}
    </div>
  );
};

export default Search;
