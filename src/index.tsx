import React from "react";
import ReactDOM from "react-dom";
import PokedexApp from "./PokedexApp";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <PokedexApp />
  </React.StrictMode>,
  document.getElementById("root")
);
