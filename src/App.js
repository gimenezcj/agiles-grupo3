import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agregar from "./pages/Agregar";
import Categorias from "./pages/Categorias";
import Perfil from "./pages/Perfil";
import Retos from "./pages/Retos";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/agregar">
            <Agregar />
          </Route>
          <Route path="/categorias">
            <Categorias />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/retos">
            <Retos />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
