/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import { PokemonModel } from "../models/PokemonModel";
import { getPokemons, createPokemon } from "../services/pokemon";

interface PokedexProviderProps {
  children: ReactNode;
}

interface PokedexContextData {
  isFetchingPokedex: boolean;
  pokemons: Array<PokemonModel>;
  addPokemon: (pokemon: PokemonModel) => void;
  updatePokemon: (pokemon: PokemonModel) => void;
  deletePokemon: (PokemonModel: PokemonModel) => void;
}

export const PokedexContext = createContext({} as PokedexContextData);

export function PokedexProvider({ children }: PokedexProviderProps) {
  const [isFetchingPokedex, setIsFetchingPokedex] = useState(true);
  const [pokemons, setPokemons] = useState<Array<PokemonModel>>([]);

  const getAll = useCallback(async (showLoader = false) => {
    if (showLoader) setIsFetchingPokedex(true);
    setTimeout(async () => {
      const pokemonsResponse = await getPokemons();
      if (pokemonsResponse && pokemonsResponse.pokemons) {
        setPokemons(pokemonsResponse.pokemons);
      }
      setIsFetchingPokedex(false);
    }, 1500);
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);

  async function addPokemon(pokemon: PokemonModel) {
    setIsFetchingPokedex(true);

    try {
      const response = await createPokemon(pokemon);

      if (response) {
        await getAll();
        return;
      }
      setIsFetchingPokedex(false);
    } catch (err) {
      setIsFetchingPokedex(false);
    }
  }

  function updatePokemon() {
    // TODO: update pokemon PUT
  }

  function deletePokemon() {
    // TODO: delete pokemon DELETE
  }

  return (
    <PokedexContext.Provider
      value={{
        isFetchingPokedex,
        pokemons,
        addPokemon,
        updatePokemon,
        deletePokemon,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
