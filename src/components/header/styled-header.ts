import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  padding: 2rem 1rem 8.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0 2rem;

    background: var(--blue-light);
    color: var(--shape);
    border: none;
    border-radius: 0.25rem;
    height: 3rem;
    font-size: 1rem;
    outline: none;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
