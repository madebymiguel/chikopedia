import "../scss/PokedexEntry.scss";
import React, { FunctionComponent } from "react";
import { PokemonData } from "./ApiResponseTypes";

const PokedexEntry: FunctionComponent<PokemonData> = (props) => {
  const { name, index, image, types, region, stats, weight, height, abilities} = props;
  // const pokeImage =
  //   "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png";
  return (
    <div className="pokedex-entry-container">
      {/* <header className="pokedex-header">
        <input type="text"></input>
      </header> */}

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
        <p>{types}</p> {/* second optional type */}
        <p>{region}</p>
        <p> weight: {weight * 0.1} kg, height: {height * 0.1} m </p>
        <p>{stats}</p>
        <p>{abilities}</p>
      </section>
    </div>
  );
};

export default PokedexEntry;
