import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Button = styled.button`
  background: #fc842d;
  border: 2px solid #fc842d;
  border-radius: 18px;
  color: rgba(255, 255, 255, 1);
  display: block;
  margin: 0px auto 0;
  margin-top: 40px;
  height: 40px;
  width: 120px;

  &:hover,
  &:focus {
    background: transparent;
    border: 2px solid #fc842d;
    transform: scale(1.1);
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
    font-weight: 700;

  &:hover {
    color: #fc842d;
    font-weight: 700;
  }
`;

export const Container404 = styled.div`
  width: 100vw;
  height: 100vh;
  border-top: 1px solid #54635a;
  padding: 20px;
    margin: 0 auto;
    max-width: 320px;

    @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
  }
`;
