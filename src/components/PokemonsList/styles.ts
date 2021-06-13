import styled, { css } from "styled-components";

export const PokedexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* flex-direction: column; */
  align-items: center;
  font-weight: 600;
  color: var(--title);

  @media (max-width: 1340px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
