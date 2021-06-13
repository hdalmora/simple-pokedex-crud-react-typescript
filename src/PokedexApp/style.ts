import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 0rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
  }

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;

export const LoadingPokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 4rem;

  span {
    font-weight: 600;
    font-size: 22px;
    margin-top: 1rem;
    margin-left: 4.2rem;
  }
`;
