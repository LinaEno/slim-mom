import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm/CalculatorCalorieForm';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Wrapper } from './HomePage.styled';
import { Desktop } from 'components/Media/Media';
import bowl from '../../images/bowl_vegetable.png'

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Wrapper>
          <Container>
            <CalculatorCalorieForm />
            <Desktop>
              <img src={bowl} alt="bowl" width={500} height={'auto'} style={{marginTop: '30px'}}/>
            </Desktop>
          </Container>
        </Wrapper>
      )}
      {isLoggedIn && <Navigate to="/diary" />}
    </>
  );
};

export default HomePage;
