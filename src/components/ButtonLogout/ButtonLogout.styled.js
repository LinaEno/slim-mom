import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  font-family: 'Jost', sans-serif;
  align-items: center;
  justify-content: flex-start;
  height: 24px;
  color: #9b9faa;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(17 / 14);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 57px;
  }
`;
