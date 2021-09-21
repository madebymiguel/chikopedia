import React, { FunctionComponent, useState, useEffect } from "react";
import { PokemonData } from "./ApiResponseTypes";
import PokedexEntry from "./PokedexEntry";

const Search: FunctionComponent = () => {
  // doesnt woek with pokemon higher than 649
  // const pokemonNum: number = 649;
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({} as PokemonData);

  useEffect(() => {
    void fetchPokemon(search);
  }, []);

  async function fetchPokemon(index: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);

    const json = await res.json();

    console.log(json.name);
    console.log(json.id);
    console.log(json.sprites.front_default);
    console.log(json.types[0].type.name);
    console.log(json.game_indices[0].version.name);

    const jsonObject = {
      name: json.name,
      index: json.id,
      image: json.sprites.front_default,
      type: json.types[0].type.name,
      region: json.game_indices[0].version.name,
    };

    setPokemon(jsonObject);

    console.log(jsonObject);
  }

  return (
    <div>
      <p>ApiCall</p>
      <input
        type="text"
        id="search-input"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <button onClick={() => fetchPokemon(search)}>Get Pokemon</button>

      <PokedexEntry {...pokemon} />
    </div>
  );
};

export default Search;
