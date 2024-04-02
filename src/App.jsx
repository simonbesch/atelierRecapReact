import "./App.css";
import React from "./components/react";
import Composants from "./components/composants";
import PropState from "./components/PropState";
import Jsx from "./components/Jsx";
import BlocVite from "./components/BlocVite";

function App() {
  return <>
  <h1>Atelier de Parlage</h1>
    <React/>
    <BlocVite/>
    <Jsx/>
    <Composants/>
    <PropState
      lesProps="WOOWWW LES PROPS QUOIII"
      lesStates="OF AMERICA"
    />
  </>;
}

export default App;
