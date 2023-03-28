import CalculatorCalorieForm from 'components/CalculatorCalorieForm/CalculatorCalorieForm';
import { useDispatch } from 'react-redux';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';
import { getUserInfo } from 'redux/auth/authOperation';
import { Container } from 'components/App/App.styled';

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(getUserInfo());

  return (
    <Container>
      
      
        <CalculatorCalorieForm />
      
      <CaloriesWrap />
    </Container>
  );
};

export default HomePage;
