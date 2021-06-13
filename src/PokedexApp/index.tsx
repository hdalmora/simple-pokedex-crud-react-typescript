import React from "react";
import { PokemonsList } from "../components/PokemonsList";
import { PokedexProvider } from "../contexts/PokedexContext";
import AddPokemon from "../components/AddPokemon";
import * as S from "./style";

function PokedexApp() {
  return (
    <div className="App">
      <PokedexProvider>
        <S.MainContainer>
          <AddPokemon />
          <PokemonsList />
        </S.MainContainer>
      </PokedexProvider>
    </div>
  );
}

export default PokedexApp;
