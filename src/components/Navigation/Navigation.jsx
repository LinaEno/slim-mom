import React from 'react';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { NavList, NavLinkStyled, NavListMenu } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavListMenu>
          <li>
            <NavLinkStyled to={'/'}>Щоденник</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={'/calculator'}>Калькулятор</NavLinkStyled>
          </li>
        </NavListMenu>
      ) : (
        <NavList>
          <li>
            <NavLinkStyled to={'/login'}>Log in</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={'/register'}>Registration</NavLinkStyled>
          </li>
        </NavList>
      )}
    </nav>
  );
};

export default Navigation;
