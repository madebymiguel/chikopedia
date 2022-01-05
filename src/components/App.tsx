import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";
import PokemonGrid from "./PokemonGrid";
import CarouselWithQuery from "./CarouselWithQuery";
import getAllPokemon from "../apis/getAllPokemon";
import githubLogo from "../assets/github-logo.png";
import "../scss/App.scss";
import "../scss/Header.scss";
import "../scss/Footer.scss";
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
  const [search, setSearch] = useState<string | number>("");
  const [pokedexStyle, setPokedexStyle] = useState<string>("grid");
  const livingDexStatus = getLivingDexStatus();
  const [livingDex, setLivingDex] = useState<boolean>(livingDexStatus);
  const [isFetchingPokemon, setIsFetchingPokemon] = useState<boolean>(false);

  const [allSimplePokemon, setPokemonStorage] = useSimplePokemonSessionStorage(
    []
  );

  const [evolutionChainStorage, setEvolutionChainStorage] =
    useEvolutionChainSessionStorage([]);

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
              />
            )}
          />
        </Switch>
        <footer id="footer">
          <a
            className="link-formatter"
            href="https://github.com/madebymiguel/chikopedia"
            target="_blank"
          >
            Chikopedia
            <img className="github-logo" src={githubLogo} alt="github-logo" />
          </a>
          <span> Created by: </span>
          <a
            className="link-formatter"
            href="https://github.com/madebymiguel"
            target="_blank"
          >
            Miguel Mayorga,{" "}
          </a>
          <a
            className="link-formatter"
            href="http://github.com/warandstar"
            target="_blank"
          >
            Jong Tai Kim
          </a>
        </footer>
      </div>
    </Router>
  );
}
