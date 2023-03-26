import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { useDispatch } from 'react-redux';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { getUserInfo } from 'redux/auth/authOperation';

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(getUserInfo());

  return (
    <>
      <p>Розрахувати денну норму калорій</p>
      <CalculatorCalorieForm />
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </>
  );
};

export default HomePage;
