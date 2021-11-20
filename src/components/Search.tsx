import React from "react";
import { Link, useLocation } from "react-router-dom";
import getPokemonIndexFromStorage from "../utils/getPokemonIndexFromStorage";
import "../scss/Search.scss";

export interface SearchProps {
  search: string | number;
  setSearch: React.Dispatch<React.SetStateAction<string | number>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  const searchIndex = getPokemonIndexFromStorage(search);
  const location = useLocation();

  return (
    <div>
      <Link
        to={
          searchIndex !== ""
            ? `/pokemon/${searchIndex}`
            : `${location.pathname}`
        }
        className="link"
      >
        <form onClick={() => setSearch("")} className="search">
          <input
            placeholder="search pokemon by name or id"
            type="text"
            id="search-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button id="search-button">Find Pokemon</button>
        </form>
      </Link>
    </div>
  );
}
