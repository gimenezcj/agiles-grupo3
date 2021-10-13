import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Agregar from "./pages/Agregar";
import Modificar from "./pages/Modificar";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Desafíame</h1>
        <Link to="/">Ir al home</Link>
        <br/>
        <Link to="/modificar">Ir al modificar</Link>
        <br/>
        <Link to="/agregar">Ir al agregar</Link>

        <Switch>
          <Route path="/modificar">
            <Modificar />
          </Route>
          <Route path="/agregar">
            <Agregar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
