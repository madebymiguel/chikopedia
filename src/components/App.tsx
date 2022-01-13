import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";
import Credits from "./Credits";
import PokemonGrid from "./PokemonGrid";
import PokemonScroll from "./PokemonScroll";
import CarouselWithQuery from "./CarouselWithQuery";
import getAllPokemon from "../apis/getAllPokemon";
import "../scss/App.scss";
import "../scss/Header.scss";
import { getLivingDexStatus } from "../utils/getLivingDexStatus";
import useSimplePokemonSessionStorage from "../utils/useSimplePokemonSessionStorage";
import sortPokemon from "../utils/sortPokemon";
import replacePokemonNamesFromArray from "../utils/replacePokemonNamesFromArray";
import simplifyPokemonArray from "../utils/simplifyPokemonArray";
import useEvolutionChainSessionStorage from "../utils/useEvolutionChainSessionStorage";
import {
  LIVING_DEX_STATUS_KEY,
  POKEMON_LIMIT,
} from "../variables/globalVariables";

export default function App() {
  const [pokedexStyle, setPokedexStyle] = useState<string>("grid");
  const livingDexStatus = getLivingDexStatus();
  const [livingDex, setLivingDex] = useState<boolean>(livingDexStatus);
  const [isFetchingPokemon, setIsFetchingPokemon] = useState<boolean>(false);

  const [allSimplePokemon, setPokemonStorage] = useSimplePokemonSessionStorage(
    []
  );

  const [evolutionChainStorage, setEvolutionChainStorage] =
    useEvolutionChainSessionStorage([]);

  const [backToLastHomeState, setbackToLastHomeState] = useState<number>(-1);

  // useEffect stays at App so that we can make loading screen for both option of scroll and grid
  useEffect(() => {
    if (allSimplePokemon.length === 0) {
      setIsFetchingPokemon(true);
      getAllPokemon(POKEMON_LIMIT).then((data) => {
        const sortedPokemonData = sortPokemon(data);
        const simplifiedPokemonArray = simplifyPokemonArray(sortedPokemonData);
        const fixedSimplifiedPokemon = replacePokemonNamesFromArray(
          simplifiedPokemonArray
        );
        setPokemonStorage(fixedSimplifiedPokemon);
        setIsFetchingPokemon(false);
      });
    }
  }, []);

  const handleToggleLivingDex = () => {
    const swap = !livingDex;
    sessionStorage.setItem(LIVING_DEX_STATUS_KEY, JSON.stringify(swap));
    setLivingDex(swap);
  };

  const handleBackButton = () => {
    history.go(backToLastHomeState);
    setbackToLastHomeState(-1);
  };

  const setBackButton = (lastState: number) => {
    setbackToLastHomeState(lastState - 1);
  };

  return (
    <Router>
      <div id="page">
        <header id="header">
          <Link className="title-link" to="/">
            <h1 className="title">Chikopedia</h1>
          </Link>
          <Search
            backToLastHomeState={backToLastHomeState}
            setBackButton={setBackButton}
          />
          <Menu
            pokedexStyle={pokedexStyle}
            setPokedexStyle={setPokedexStyle}
            livingDex={livingDex}
            onToggleLivingDex={handleToggleLivingDex}
          />
        </header>
        <Switch>
          <Route exact path="/">
            {pokedexStyle === "grid" ? (
              <PokemonGrid
                livingDex={livingDex}
                allPokemon={allSimplePokemon}
                isLoading={isFetchingPokemon}
              />
            ) : (
              <PokemonScroll
                livingDex={livingDex}
                allPokemon={allSimplePokemon}
                isLoading={isFetchingPokemon}
              />
            )}
          </Route>
          <Route
            path="/pokemon/:pokemonId"
            render={({ match }) => (
              <CarouselWithQuery
                pokemonId={+match.params.pokemonId}
                livingDex={livingDex}
                backToLastHomeState={backToLastHomeState}
                handleBackButton={handleBackButton}
                setBackButton={setBackButton}
              />
            )}
          />
        </Switch>
        <Credits />
      </div>
    </Router>
  );
}
