import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
