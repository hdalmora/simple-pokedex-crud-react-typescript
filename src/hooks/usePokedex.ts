import { useContext } from "react";
import { PokedexContext } from "../contexts/PokedexContext";

export function usePokedex() {
  const context = useContext(PokedexContext);

  return context;
}
