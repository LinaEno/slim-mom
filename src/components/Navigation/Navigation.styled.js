import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
display: flex;
gap: 14px;
padding-top: 10px;

@media screen and (min-width: 768px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 20px;
    margin-bottom: 7px;
  }
`

export const NavLinkStyled = styled(NavLink)`
font-weight: 700;
font-size: 14px;
line-height: calc(17 / 14);
letter-spacing: 0.04em;
text-transform: uppercase;
color: #9B9FAA;

&.active {
    color: #212121;
  }
`