import axios from "axios";
import { PokemonModel } from "../models/PokemonModel";

interface PokemonResponse {
  status: string;
  results: number;
  pokemons: Array<PokemonModel>;
}

const baseURL = "https://pokemon-api-unicamp.herokuapp.com/api/v1/pokemons";

export const getPokemons = async (): Promise<PokemonResponse> => {
  try {
    const response = await axios.get(baseURL);

    return response.data as PokemonResponse;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
