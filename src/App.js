import React, { } from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import CharacterId from "./pages/CharacterId";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-content">
      <HashRouter basename="/" className="browser-router">
        <Header />
        <div className="app-content__main">
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
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
