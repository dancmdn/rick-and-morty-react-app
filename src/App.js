import React, {  } from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import Navbar from "./components/UI/Navbar/Navbar";
import CharacterId from "./pages/CharacterId";

function App() {
  return (
    <div>
      <HashRouter basename="/" className="browser-router">
        <Navbar />
        <Switch>
          <Route exact path="/character">
            <Character />
          </Route>
          <Route path="/character/:id">
            <CharacterId />
          </Route> 
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/episode">
            <Episode />
          </Route>
          <Redirect to="/character" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
