import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { useDispatch } from 'react-redux';
import { openModalRecommendation } from 'redux/global/slice';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Розрахувати денну норму калорій</p>
      <CalculatorCalorieForm />
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <CaloriesWrap />
    </>
  );
};

export default HomePage;
