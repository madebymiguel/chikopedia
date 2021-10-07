import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../apis/fetchPokemon";
import { Pokemon } from "../types/Pokemon";
import PokemonGridItem, { PokemonGridItemProps } from "./PokemonGridItem";

export default function PokemonGrid() {
    const POKEMON_LIMIT = 2;

    const [pokemons, setPokemons] = useState<Pokemon>();
    const getPokemon = (index: number) => {
        const res = fetchPokemon(index);
        res.then((pokemonObject) => {
            setPokemons(pokemonObject);
            console.log(pokemons);
        });
    };

    for(let i = 0; i < POKEMON_LIMIT; i++) {
        getPokemon(i);
    }


    // useEffect(() => {
    //     getPokemon(POKEMON_LIMIT);
    // }, []);
    
    // do something with pokemons
    
    // first 1 - 30, second: 31- 60 ......
    return(
        <div id = "pokemon-grid">
            Pokemon Grid
            {/* <PokemonGridItem/> */}
            <button onClick = {() => getPokemon(POKEMON_LIMIT)}>
                Don't Click This!!
            </button>
        </div>
    )
}