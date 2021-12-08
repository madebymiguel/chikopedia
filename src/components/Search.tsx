import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import getPokemonIndexFromStorage from "../utils/getPokemonIndexFromStorage";
import "../scss/Search.scss";

export interface SearchProps {
  search: string | number;
  setSearch: React.Dispatch<React.SetStateAction<string | number>>;
}

export default function Search({ search, setSearch }: SearchProps) {
  const [searchIndex, setSearchIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const setSearchIndexOnUseEffect = async () => {
      setSearchIndex(await getPokemonIndexFromStorage(search));
    };
    setSearchIndexOnUseEffect();
  }, [search]);

  return (
    <div>
      <Link
        to={
          searchIndex !== 0 ? `/pokemon/${searchIndex}` : `${location.pathname}`
        }
        className="link"
      >
        <form onClick={() => setSearch("")} className="search">
          <input
            placeholder="Search your Pokemon by Name or ID!"
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
