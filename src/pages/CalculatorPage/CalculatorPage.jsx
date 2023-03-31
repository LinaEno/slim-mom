import { Container } from 'components/App/App.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm/CalculatorCalorieForm';

import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';

const CalculatorPage = () => {
  return (
    <Container>
      <CalculatorCalorieForm />
      <CaloriesWrap />
    </Container>
  );
};

export default CalculatorPage;
