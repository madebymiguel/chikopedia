import React from "react";
import { FunctionComponent } from "react";
import { PokemonData } from "./ApiResponseTypes";

const PokedexEntry: FunctionComponent<PokemonData> = (props) => {
  const { name, index, image, type, region } = props;
  // const pokeImage =
  //   "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png";
  return (
    <div>
      <div>
        <input type="text"></input>
      </div>

      <section>
        <h2>{name}</h2>
        <p>{index}</p>
        <img src={image}></img>

        <section>
          <p>{type}</p>
          <p>{region}</p>
        </section>
      </section>
    </div>
  );
};

export default PokedexEntry;
