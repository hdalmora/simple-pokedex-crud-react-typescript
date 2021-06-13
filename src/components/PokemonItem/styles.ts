import styled, { css } from "styled-components";

interface IPokemonContainer {
  color: string;
}

export const PokemonContainer = styled.div<IPokemonContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);

  width: 300px;
  height: 180px;
  padding: 15px;
  margin: 16px;
  border-radius: 8px;

  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  img {
    height: 85px;
    width: 85px;
  }

  span {
    span {
      color: ${(props) => props.color};
    }
  }
`;
