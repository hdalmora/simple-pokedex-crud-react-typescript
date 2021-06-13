import LoadingGif from "../../assets/loading.gif";
import * as S from "./styles";

export function Loading() {
  return (
    <S.LoadingPokedexContainer>
      <img src={LoadingGif} alt="Loading..." />
      <span>Carregando Pokedéx...</span>
    </S.LoadingPokedexContainer>
  );
}
