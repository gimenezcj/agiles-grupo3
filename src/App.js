import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agregar from "./pages/Agregar";
import Modificar from "./pages/Modificar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/modificar">
          <Modificar />
        </Route>
        <Route path="/agregar">
          <Agregar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
