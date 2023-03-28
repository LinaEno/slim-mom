import { Container } from 'components/App/App.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';

// import { useMediaQuery } from 'react-responsive';

const CalculatorPage = () => {
  return (
    <Container>
      <CalculatorCalorieForm />
      <CaloriesWrap />
    </Container>
  );
};

export default CalculatorPage;
