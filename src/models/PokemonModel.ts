import { PokemonTypeEnum } from "./PokemonTypeEnum";

export type PokemonModel = {
  id?: string;
  pokemonName: string;
  pokemonType: PokemonTypeEnum;
  pokemonImageUrl: string;
  strength: number;
  speed?: number;
  defence?: number;
};
