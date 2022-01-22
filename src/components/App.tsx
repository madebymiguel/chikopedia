import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";
import Credits from "./Credits";
import PokemonGrid from "./PokemonGrid";
import PokemonScrollWithQuery from "./PokemonScrollWithQuery";
import CarouselWithQuery from "./CarouselWithQuery";
import LoadingComponent from "./LoadingComponent";
import ChikoritaLeaf from "../assets/chikorita-leaf.svg";
import getAllPokemon from "../apis/getAllPokemon";
import "../scss/App.scss";
import "../scss/Header.scss";
import getLivingDexStatusFromSessionStorage from "../utils/getLivingDexStatusFromSessionStorage";
import sortPokemon from "../utils/sortPokemon";
import replacePokemonNamesFromArray from "../utils/replacePokemonNamesFromArray";
import simplifyPokemonArray from "../utils/simplifyPokemonArray";
import useSimplePokemonSessionStorage from "../utils/useSimplePokemonSessionStorage";
import getPokedexStyleFromSessionStorage from "../utils/getPokedexStyleFromSessionStorage";
import {
  LIVING_DEX_STATUS_KEY,
  POKEDEX_STYLE_KEY,
  POKEMON_LIMIT,
} from "../variables/globalVariables";

export default function App() {
  const pokedexStyleStatus = getPokedexStyleFromSessionStorage();
  const [pokedexStyle, setPokedexStyle] = useState<string>(pokedexStyleStatus);

  const livingDexStatus = getLivingDexStatusFromSessionStorage();
  const [livingDex, setLivingDex] = useState<boolean>(livingDexStatus);

  const [isFetchingPokemon, setIsFetchingPokemon] = useState<boolean>(false);
  const [backToLastHomeState, setbackToLastHomeState] = useState<number>(0);

  const [allSimplePokemon, setPokemonStorage] = useSimplePokemonSessionStorage(
    []
  );

  useEffect(() => {
    if (allSimplePokemon.length === 0) {
      getAllPokemon(POKEMON_LIMIT).then((data) => {
        const sortedPokemonData = sortPokemon(data);
        const simplifiedPokemonArray = simplifyPokemonArray(sortedPokemonData);
        const fixedSimplifiedPokemon = replacePokemonNamesFromArray(
          simplifiedPokemonArray
        );
        setPokemonStorage(fixedSimplifiedPokemon);
        setIsFetchingPokemon(true);
      });
    } else {
      setIsFetchingPokemon(true);
    }
  }, []);

  const handleToggleLivingDex = () => {
    const swap = !livingDex;
    sessionStorage.setItem(LIVING_DEX_STATUS_KEY, JSON.stringify(swap));
    setLivingDex(swap);
  };

  const handlePokedexStyle = (style: string) => {
    sessionStorage.setItem(POKEDEX_STYLE_KEY, JSON.stringify(style));
    setPokedexStyle(style);
  };

  const handleBackButtonReset = () => {
    history.go(backToLastHomeState);
    setbackToLastHomeState(0);
  };

  const handleBackButtonState = (lastState: number) => {
    setbackToLastHomeState(lastState - 1);
  };

  return (
    <Router>
      <div id="page">
        <header id="header">
          <Link
            className="title-link"
            to="/"
            onClick={() => setbackToLastHomeState(0)}
          >
            <div className="title-container">
              <img
                src={ChikoritaLeaf}
                alt="chikorita-leaf"
                className="title-image"
              />
              {window.innerWidth > 600 ? (
                <h1 className="title">Chikopedia</h1>
              ) : null}
            </div>
          </Link>

          <Search
            backToLastHomeState={backToLastHomeState}
            handleBackButtonState={handleBackButtonState}
          />

          <Menu
            pokedexStyle={pokedexStyle}
            handlePokedexStyle={handlePokedexStyle}
            livingDex={livingDex}
            onToggleLivingDex={handleToggleLivingDex}
          />
        </header>
        <Switch>
          <Route exact path="/">
            {pokedexStyle === "grid" ? (
              isFetchingPokemon ? (
                <PokemonGrid
                  livingDex={livingDex}
                  allPokemon={allSimplePokemon}
                  backToLastHomeState={backToLastHomeState}
                  handleBackButtonState={handleBackButtonState}
                />
              ) : (
                <LoadingComponent />
              )
            ) : isFetchingPokemon ? (
              <PokemonScrollWithQuery
                livingDex={livingDex}
                allPokemon={allSimplePokemon}
                backToLastHomeState={backToLastHomeState}
                handleBackButtonState={handleBackButtonState}
              />
            ) : (
              <LoadingComponent />
            )}
          </Route>

          <Route
            path="/pokemon/:pokemonId"
            render={({ match }) => (
              <CarouselWithQuery
                pokemonId={+match.params.pokemonId}
                livingDex={livingDex}
                backToLastHomeState={backToLastHomeState}
                handleBackButtonReset={handleBackButtonReset}
                handleBackButtonState={handleBackButtonState}
              />
            )}
          />
        </Switch>

        <Credits />
      </div>
    </Router>
  );
}
