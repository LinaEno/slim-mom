import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useDispatch } from 'react-redux';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';
import { getUserInfo } from 'redux/auth/authOperation';
import { Container } from 'components/App/App.styled';

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(getUserInfo());

  return (
    <Container>
      <div>
        <h1>Розрахувати денну норму калорій</h1>
        <CalculatorCalorieForm />
      </div>
      <CaloriesWrap />
    </Container>
  );
};

export default HomePage;
