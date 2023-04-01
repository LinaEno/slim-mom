import { Container } from 'components/App/App.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm/CalculatorCalorieForm';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Container>
          <CalculatorCalorieForm />
        </Container>
      )}
      {isLoggedIn && <Navigate to="/diary" />}
    </>
  );
};

export default HomePage;
