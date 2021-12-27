import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import Menu from "./Menu";
import CarouselWithQuery from "./CarouselWithQuery";
import { getLivingDexStatus } from "../utils/getLivingDexStatus";
import {
  LIVING_DEX_STATUS_KEY,
  POKEMON_LIMIT,
} from "../variables/globalVariables";
import useSimplePokemonSessionStorage from "../utils/useSimplePokemonSessionStorage";
import getAllPokemon from "../apis/getAllPokemon";
import sortPokemon from "../utils/sortPokemon";
import simplifyPokemon from "../utils/simplifyPokemon";
import replacePokemonNamesFromArray from "../utils/replacePokemonNamesFromArray";
import PokemonGrid from "./PokemonGrid";

export default function App() {
  const [search, setSearch] = useState<string | number>("");
  const [pokedexStyle, setPokedexStyle] = useState<string>("grid");
  const livingDexStatus = getLivingDexStatus();
  const [livingDex, setLivingDex] = useState<boolean>(livingDexStatus);
  const [isFetchingPokemon, setIsFetchingPokemon] = useState<boolean>(false);

  const [allSimplePokemon, setPokemonStorage] = useSimplePokemonSessionStorage(
    []
  );

  // useEffect stays at App so that we can make loading screen for both option of scroll and grid
  useEffect(() => {
    if (allSimplePokemon.length === 0) {
      setIsFetchingPokemon(true);
      getAllPokemon(POKEMON_LIMIT).then((data) => {
        const sortedPokemonData = sortPokemon(data);
        const simplifiedPokemon = simplifyPokemon(sortedPokemonData);
        const fixedSimplifiedPokemon =
          replacePokemonNamesFromArray(simplifiedPokemon);
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

  return (
    <Router>
      <div id="page">
        <header id="header">
          <Link className="title" to="/">
            <h1>Chikopedia</h1>
          </Link>
          <Search search={search} setSearch={setSearch} />
          <Menu
            pokedexStyle={pokedexStyle}
            setPokedexStyle={setPokedexStyle}
            livingDex={livingDex}
            onToggleLivingDex={handleToggleLivingDex}
          />
        </header>
        <Switch>
          <Route exact path="/">
            <PokemonGrid
              livingDex={livingDex}
              allPokemon={allSimplePokemon}
              isLoading={isFetchingPokemon}
            />
          </Route>
          <Route
            path="/pokemon/:pokemonId"
            render={({ match }) => (
              <CarouselWithQuery
                pokemonId={+match.params.pokemonId}
                livingDex={livingDex}
                allSimplePokemon={allSimplePokemon}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
function setIsFetchingPokemon(arg0: boolean) {
  throw new Error("Function not implemented.");
}
