import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: -4rem;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;

    background: var(--shape);
    color: var(--text-title);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
  }

  .total {
    background: var(--green);
    color: var(--shape);
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
