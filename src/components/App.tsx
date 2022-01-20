import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";
import Credits from "./Credits";
import PokemonGrid from "./PokemonGrid";
import PokemonScroll from "./PokemonScroll";
import CarouselWithQuery from "./CarouselWithQuery";
import LoadingComponent from "./LoadingComponent";
import getAllPokemon from "../apis/getAllPokemon";
import "../scss/App.scss";
import "../scss/Header.scss";
import getLivingDexStatusFromSessionStorage from "../utils/getLivingDexStatusFromSessionStorage";
import sortPokemon from "../utils/sortPokemon";
import replacePokemonNamesFromArray from "../utils/replacePokemonNamesFromArray";
import simplifyPokemonArray from "../utils/simplifyPokemonArray";
import useSimplePokemonSessionStorage from "../utils/useSimplePokemonSessionStorage";
import useEvolutionChainSessionStorage from "../utils/useEvolutionChainSessionStorage";
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

  const [allSimplePokemon, setPokemonStorage] = useSimplePokemonSessionStorage(
    []
  );

  const [evolutionChainStorage, setEvolutionChainStorage] =
    useEvolutionChainSessionStorage([]);

  const [backToLastHomeState, setbackToLastHomeState] = useState<number>(0);
  // let history = useHistory();

  // useEffect stays at App so that we can make loading screen for both option of scroll and grid
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

  const handleBackButton = () => {
    console.log("handle", backToLastHomeState);
    history.go(backToLastHomeState);

    setbackToLastHomeState(0);
  };

  const setBackButton = (lastState: number) => {
    console.log("set", backToLastHomeState);
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
            <h1 className="title">Chikopedia</h1>
          </Link>
          <Search
            backToLastHomeState={backToLastHomeState}
            setBackButton={setBackButton}
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
                  setBackButton={setBackButton}
                />
              ) : (
                <LoadingComponent />
              )
            ) : isFetchingPokemon ? (
              <PokemonScroll
                livingDex={livingDex}
                allPokemon={allSimplePokemon}
                backToLastHomeState={backToLastHomeState}
                setBackButton={setBackButton}
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
