import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import { useSelector } from 'react-redux';
import { randomAvatar } from '../../utils/randomAvatar';
import { getUserName, selectIsLoggedIn } from 'redux/auth/authSelectors';

import {
  HeaderStyled,
  UserName,
  Delimiter,
  UserBox,
  Avatar,
  Container,
  Title,
  NavLinkStyled,
  Span,
} from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import logo from '../../images/logo.png';
import { Desktop, Mobile, Tablet, Default } from 'components/Media/Media';

export const Header = () => {
  const userName = useSelector(getUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HeaderStyled>
        <Container>
          <NavLinkStyled to={'/'}>
            <Mobile>
              <img
                src={logo}
                alt="img"
                style={{ width: '46px', height: '44px' }}
              />
            </Mobile>
            <Tablet>
              <img
                src={logo}
                alt="img"
                style={{ width: '46px', height: '44px' }}
              />
            </Tablet>
            <Desktop>
              <img
                src={logo}
                alt="img"
                style={{ width: '70px', height: '66px' }}
              />
            </Desktop>
            <Default>
              <Title>
                Slim<Span>Mom</Span>
              </Title>
            </Default>
          </NavLinkStyled>
          <Desktop>
            <Delimiter></Delimiter>
          </Desktop>
            <Navigation />
            <Default>
              {isLoggedIn && (
                <UserBox>
                  <Avatar>
                    <img src={randomAvatar} alt="Avatar" />
                  </Avatar>
                  <UserName>{userName}</UserName>
                  <Delimiter></Delimiter>
                  <ButtonLogout />
                </UserBox>
              )}
            </Default>
        </Container>
      </HeaderStyled>
      <Mobile>
        {isLoggedIn && (
          <UserBox>
            <Avatar>
              <img src={randomAvatar} alt="Avatar" />
            </Avatar>
            <UserName>{userName}</UserName>
            <Delimiter></Delimiter>
            <ButtonLogout />
          </UserBox>
        )}
      </Mobile>
    </>
  );
};
