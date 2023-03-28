import { Container } from 'components/App/App.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';

// import { useMediaQuery } from 'react-responsive';

const CalculatorPage = () => {
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

export default CalculatorPage;
