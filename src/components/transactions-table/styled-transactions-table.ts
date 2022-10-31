import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    text-align: left;
    padding: 2rem 1.25rem;
    line-height: 1.5rem;
  }

  td {
    background: var(--shape);
    color: var(--text-body);
    padding: 2rem 1.25rem;
    border-radius: 0.25rem;
    border: 0;

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdrawal {
      color: var(--red);
    }
  }
`;
