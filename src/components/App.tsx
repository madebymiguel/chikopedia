import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import Menu from "./Menu";
import PokemonGridWithQuery from "./PokemonGridWithQuery";
import CarouselWithQuery from "./CarouselWithQuery";
import { getLivingDexStatus } from "../utils/getLivingDexStatus";
import { LIVING_DEX_STATUS_KEY } from "../variables/globalVariables";

export default function App() {
  const [search, setSearch] = useState<string | number>("");
  const [pokedexStyle, setPokedexStyle] = useState<string>("grid");
  const livingDexStatus = getLivingDexStatus();
  const [livingDex, setLivingDex] = useState<boolean>(livingDexStatus);

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
            <PokemonGridWithQuery livingDex={livingDex} />
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
      </div>
    </Router>
  );
}
