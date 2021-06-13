/* eslint-disable react-hooks/exhaustive-deps */
import { PokemonModel } from "../../models/PokemonModel";
import { PokemonTypeEnum } from "../../models/PokemonTypeEnum";
import { CustomBar } from "../CustomBar";
import * as S from "./styles";

interface IPokemonItem {
  index: number;
  pokemon: PokemonModel;
}

export function PokemonItem({ index, pokemon }: IPokemonItem) {
  const getPokemonTypeColor = (): string => {
    switch (pokemon.pokemonType) {
      case PokemonTypeEnum.BUG:
        return "#A8B820";
      case PokemonTypeEnum.GHOST:
        return "#705898";
      case PokemonTypeEnum.STEEL:
        return "#B8B8D0";
      case PokemonTypeEnum.FIRE:
        return "#F08030";
      case PokemonTypeEnum.ROCK:
        return "#B8A038";
      case PokemonTypeEnum.WATER:
        return "#6890F0";
      case PokemonTypeEnum.ELECTRIC:
        return "#F8D030";
      case PokemonTypeEnum.PSYCHIC:
        return "#F85888";
      default:
        return "#2E384D";
    }
  };

  return (
    <S.PokemonContainer color={getPokemonTypeColor()}>
      <img src={pokemon.pokemonImageUrl} alt={pokemon.pokemonName} />
      <span>
        {pokemon.pokemonName} • <span>{pokemon.pokemonType}</span>
      </span>

      <br />
      <CustomBar value={pokemon.strength} />
    </S.PokemonContainer>
  );
}
