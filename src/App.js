import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { NewsProvider } from "./NewsContext";

function App() {
  return (
    <NewsProvider>
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
    </NewsProvider>
  );
}

export default App;
