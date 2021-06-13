import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }

  > div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }

  span.current-value {
    position: absolute;
    top: 12px;
    transform: translateX(-50);
    font-weight: 600;
  }
`;
