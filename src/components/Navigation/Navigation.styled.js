import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
    padding: 20px 0 6px 20px;
    margin-left: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 14px;
  padding-top: 10px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin-left: 370px;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
    padding: 20px 0 6px 20px;
    margin-left: 0;

  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;

  &.active {
    color: #212121;
  }
`;
