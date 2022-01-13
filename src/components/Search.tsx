import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "../assets/search-icon.svg";
import "../scss/Search.scss";
import getPokemonIndexFromStorage from "../utils/getPokemonIndexFromStorage";

export interface SearchProps {
  backToLastHomeState: number;
  setBackButton: (val: number) => void;
}

export default function Search({
  backToLastHomeState,
  setBackButton,
}: SearchProps) {
  const [search, setSearch] = useState<string>("");

  const [searchIndex, setSearchIndex] = useState<number>(0);
  let history = useHistory();

  const handleSearchIndex = async () => {
    const pokemonIndex = await getPokemonIndexFromStorage(search);
    setSearchIndex(pokemonIndex);
    setSearch("");
  };

  useEffect(() => {
    if (searchIndex !== 0) {
      history.push(`/pokemon/${searchIndex}`);
    }
  }, [searchIndex]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchIndex();
          setBackButton(backToLastHomeState);
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
        <button id="search-button" type="submit">
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </form>
    </>
  );
}
