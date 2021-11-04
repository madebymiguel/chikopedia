import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Pokemon } from "../types/Pokemon";
import Carousel from "./Carousel";

export interface SearchProps {
  search: string | number;
  setSearch: React.Dispatch<React.SetStateAction<string | number>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(search);
    console.log("search", search);
  };

  return (
    <div>
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
    </div>
  );
}
