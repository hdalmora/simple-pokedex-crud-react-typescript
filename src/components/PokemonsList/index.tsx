/* eslint-disable react-hooks/exhaustive-deps */
import { usePokedex } from "../../hooks/usePokedex";
import { Loading } from "../Loading";
import { PokemonItem } from "../PokemonItem";
import * as S from "./styles";

export function PokemonsList() {
  const { isFetchingPokedex, pokemons } = usePokedex();

  if (isFetchingPokedex) {
    return <Loading />;
  }

  return (
    <>
      <S.PokedexContainer>
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonItem key={pokemon.id} index={index} pokemon={pokemon} />
          );
        })}
      </S.PokedexContainer>
    </>
  );
}
