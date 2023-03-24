import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  color: #fff;
  background-color: #24cca7;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    bottom: 40px;
    right: 40px;
  }
`;
