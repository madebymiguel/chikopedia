import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../apis/fetchPokemon";
import { Pokemon } from "../types/Pokemon";
import Carousel from "./Carousel";

export interface SearchProps {
  search: string | number,
  setSearch: React.Dispatch<React.SetStateAction<string | number>>
};

export default function Search({search, setSearch}: SearchProps) {

  const [tempSearch, setTempSearch] = useState(search);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(tempSearch);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="search pokemon"
          type="text"
          id="search-input"
          value={tempSearch}
          onChange={(e) => {
            setTempSearch(e.target.value);
          }}
        ></input>
        <button>Find Pokemon</button>
      </form>
    </div>
  );
}
