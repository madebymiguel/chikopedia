import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Pokemon } from "../types/Pokemon";
import { SimplePokemon } from "../utils/UseSessionStorage";
import Carousel from "./Carousel";

export interface SearchProps {
  search: string | number;
  setSearch: React.Dispatch<React.SetStateAction<string | number>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchIndex = getPokemonIndexFromStorage(search);

    console.log("index is " + searchIndex);
    setSearch(searchIndex);
    console.log("search", search);
  };

  // some function to get pokemon from session storage
  // if not exist in session storage, pokemon should be retrieved directly from fetch
  // if still not found, throw an error
  // Use information from SimplePokemon to retrieve what to fetch
  // parameter:
  function getPokemonIndexFromStorage(search: string | number) {
    console.log("search is: ", search);
    if (search !== "") {
      const stored = sessionStorage.getItem("allSimplePokemon");
      if (stored !== null) {
        const storedData: SimplePokemon[] = JSON.parse(stored);
        const filteredStoredData = storedData.filter(
          (e: SimplePokemon) => e.name === search
        );
        console.log("searched value is " + search);
        console.log(filteredStoredData, " is filtered");
        if (filteredStoredData.length > 0) {
          return filteredStoredData[0].id;
        }
      }
    }
    return search;
  }

  // switch form into "link"
  return (
    <div>
      <Link
        to={`/pokemon/${getPokemonIndexFromStorage(search)}`}
        className="link"
      >
        <form onSubmit={handleSubmit}>
          <input
            placeholder="search pokemon by name or id"
            type="text"
            id="search-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button>Find Pokemon</button>
        </form>
      </Link>
    </div>
  );
}
