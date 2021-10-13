import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agregar from "./pages/Agregar";
import Modificar from "./pages/Modificar";
import Categorias from "./pages/Categorias";

function App() {
  return (
    
      <div className="App">
    
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
        <Route path="/categorias">
          <Categorias />
        </Route>
      </Switch>

    </Router>
    </div>
    
  );
}

export default App;
