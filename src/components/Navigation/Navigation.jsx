import React from 'react';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { NavList, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavList>
          <li>
            <NavLinkStyled to={'/'}>Diary</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={'/calculator'}>Calculator</NavLinkStyled>
          </li>
        </NavList>
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
