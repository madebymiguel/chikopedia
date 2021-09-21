import "../scss/PokedexEntry.scss";
import React, { FunctionComponent } from "react";
import { PokemonData } from "./ApiResponseTypes";

const PokedexEntry: FunctionComponent<PokemonData> = (props) => {
  const { name, index, image, type, region } = props;
  // const pokeImage =
  //   "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png";
  return (
    <div className="pokedex-entry-container">
      <header className="pokedex-header">
        <input type="text"></input>
      </header>

      <section className="pokedex-screen">
        <div className="title">
          <h2>{name}</h2>
          <p>{index}</p>
        </div>
        <div className="sprite">
          <img src={image} className="sprite-image"></img>
        </div>
      </section>

      <section className="pokedex-detailed-info">
        <p>{type}</p>
        <p>{region}</p>
      </section>
    </div>
  );
};

export default PokedexEntry;
