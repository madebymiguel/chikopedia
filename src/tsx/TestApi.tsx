import React, { FunctionComponent, useState, useEffect } from "react";
import { PokemonAbilities, PokemonData, PokemonStats, PokemonTypes } from "./ApiResponseTypes";
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

    // console.log(json.name);
    // console.log(json.id);
    // console.log(json.sprites.front_default);
    // console.log(json.types);
    // console.log(json.game_indices[0].version.name);
    // console.log(json.stats);
    

    const jsonObject = {
      name: json.name,
      index: json.id,
      image: json.sprites.front_default,
      types: parseTypes(json.types),
      region: json.game_indices[0].version.name,
      stats: parseStats(json.stats),
      weight: json.weight,
      height: json.height,
      abilities: parseAbilities(json.abilities),
    };
    console.log(jsonObject);
    setPokemon(jsonObject);
  }

  function parseTypes(typesJson: any) {
    const types: PokemonTypes = typesJson.map((el: any) => el.type.name + " "); // space???
    return types;
  }

  function parseStats(statsJson: any) {
    const stats: PokemonStats[] = statsJson.map((statData: any) => statData.stat.name + " " + statData.base_stat + ". ");
    return stats;
  }

  function parseAbilities(abilitiesJson: any) {
    const abilities: PokemonAbilities[] = abilitiesJson.map((abilityData: any) => abilityData.ability.name + " " + abilityData.is_hidden + ". ");
    return abilities;
  }
  return (
    <div>
      <p>Pokedex Search</p>

      <form onSubmit={(e) => {e.preventDefault(); void fetchPokemon(search)} }>
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

      <PokedexEntry {...pokemon} />
    </div>
  );
};

export default Search;
