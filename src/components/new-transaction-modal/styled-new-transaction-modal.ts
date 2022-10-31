import styled from "styled-components";

import { transparentize } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  input {
    margin-bottom: 1rem;
    max-width: 100%;
    height: 4rem;
    padding: 1.25rem 1.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: #e7e9ee;
    font-weight: 400;
    line-height: 1.25rem;

    &:last-child {
      margin-bottom: 1.4rem;
    }

    &::placeholder {
      color: var(--text-body);
    }
  }

  .button-submit {
    background: var(--green);
    border: none;
    color: var(--shape);
    font-weight: 600;
  }
`;

export const Button = styled.button`
  height: 4rem;
  max-width: 100%;
  border-radius: 0.25rem;
  line-height: 1.5rem;
  transition: filter 2ms;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SelectTransictionContainer = styled.div<{ isActive: string }>`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  .deposit {
    background: ${({ isActive }) =>
      isActive === "deposit" ? transparentize(0.9, "#12A454") : "transparent"};
  }

  .withdrawal {
    background: ${({ isActive }) =>
      isActive === "withdrawal"
        ? transparentize(0.9, "#E52E4D")
        : "transparent"};
  }
`;

export const SelectButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #d7d7d7;
  font-weight: 400;
  color: var(--text-title);

  &:hover {
    border: 1px solid #aaa;
  }
`;
