import React from 'react';
import { NavLink } from 'react-router-dom';
import { Default, Mobile } from 'components/Media/Media';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <ul>
          <li>
            <NavLink to={'/'}>Diary</NavLink>
          </li>
          <li>
            <NavLink to={'/calculator'}>Calculator</NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink to={'/login'}>Log in</NavLink>
          </li>
          <li>
            <NavLink to={'/register'}>Registration</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
