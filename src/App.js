import React, {  } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import Navbar from "./components/UI/Navbar/Navbar";
import CharacterId from "./pages/CharacterId";

function App() {
  return (
    <div>
      <BrowserRouter className="browser-router">
        <Navbar />
        <Switch>
          <Route exact path="/character">
            <Character />
          </Route>
          <Route exact path="/character/:id">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
