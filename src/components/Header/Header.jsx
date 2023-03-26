import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { randomAvatar } from '../../utils/randomAvatar';
import { getUserName, selectIsLoggedIn } from 'redux/auth/authSelectors';
// import { ReactComponent as Logo } from '../../images/Group.svg';
import {
  HeaderStyled,
  UserName,
  Delimiter,
  Link,
  UserBox,
  Avatar,
  Container,
  Title,
} from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import logo from '../../images/logo.png';
import { Desktop, Mobile, Tablet } from 'components/Media/Media';

export const Header = () => {
  const userName = useSelector(getUserName);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      <Container>
        <Link to={'/'}>
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
          <Title>SlimMom</Title>
        </Link>
        <Navigation />
        {isLoggedIn && (
          <UserBox>
            <Avatar>
              <img src={randomAvatar} alt="Avatar" />
            </Avatar>
            <UserName>{userName}</UserName>
            {isTablet && <Delimiter></Delimiter>}
            <ButtonLogout />
          </UserBox>
        )}
      </Container>
    </HeaderStyled>
  );
};
