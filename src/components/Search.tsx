import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../scss/Search.scss";
import getPokemonIndexFromStorage from "../utils/getPokemonIndexFromStorage";

export default function Search() {
  const [search, setSearch] = useState<string | number>("");

  const [searchIndex, setSearchIndex] = useState(0);
  let history = useHistory();

  const handleSearchIndex = async () => {
    const pokemonIndex = await getPokemonIndexFromStorage(search);
    setSearchIndex(pokemonIndex);
    history.push(`/pokemon/${searchIndex}`);
    setSearch("");
  };

  useEffect(() => {
    if (searchIndex !== 0) {
      handleSearchIndex();
    }
  }, [searchIndex]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchIndex();
        }}
        className="search"
      >
        <input
          placeholder="Search your Pokemon by Name or ID!"
          type="text"
          id="search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>

        <input id="search-button" type="submit" value="Find Pokemon"></input>
      </form>
    </div>
  );
}
