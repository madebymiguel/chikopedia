import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import PokemonGrid from "./PokemonGrid";
import Menu from "./Menu";
import Carousel from "./Carousel";

export default function App() {
  const [search, setSearch] = useState("" as string | number);
  console.log("app search", search);
  return (
    <Router>
      <div id="page">
        <div id="header">
          <Link to="/">
            <h1>Chikopedia</h1>
          </Link>
          <Search search={search} setSearch={setSearch} />
          <Menu />
        </div>
        <Switch>
          <Route exact path="/">
            <PokemonGrid />
          </Route>
          <Route
            path="/pokemon/:pokemonName"
            render={(props) => <Carousel {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
