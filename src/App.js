import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Registro } from "./componets/Registro";
import { Login } from "./componets/Login";
import { Listado } from "./componets/Listado";
import { Nav } from "./componets/Nav";


function App() {
    
   
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/listado">
            <Listado />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;