import React, { } from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import CharacterId from "./pages/CharacterId";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocationId from "./pages/LocationId";
import EpisodeId from "./pages/EpisodeId";
import { CSSTransition } from "react-transition-group";
import TransitionElement from "./components/UI/TransitionElement/TransitionElement";

function App() {
  const routes = [
    {path: '/character', Component: Character},
    {path: '/character/:id', Component: CharacterId},
    {path: '/location', Component: Location},
    {path: '/location/:id', Component: LocationId},
    {path: '/episode', Component: Episode},
    {path: '/episode/:id', Component: EpisodeId}, 
  ];

  return (
    <div className="app-content">
      <HashRouter basename="/" className="browser-router">
        <Header />
        <div >
          <Switch>
            {routes.map(({ path, Component }) =>
              <Route key={path} exact path={path}>
                {({ match }) =>
                  <TransitionElement>
                    <div className="page">
                      <Component />
                    </div>
                  </TransitionElement>
                }
              </Route>
            )}

            {/* <Route exact path="/character">
              <Character />
            </Route>
            <Route path="/character/:id">
              <CharacterId />
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
            <Route path="/location/:id">
              <LocationId />
            </Route>
            <Route exact path="/episode">
              <Episode />
            </Route>
            <Route exact path="/episode/:id">
              <EpisodeId />
            </Route> */}
            <Redirect to="/character" />
          </Switch>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
