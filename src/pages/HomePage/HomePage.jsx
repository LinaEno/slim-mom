import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { useDispatch } from 'react-redux';
import { openModalRecommendation } from 'redux/global/slice';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';

const HomePage = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalRecommendation());
  };

  return (
    <>
      <p>Hello</p>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <button type="button" onClick={openModal}>
        Почніть худнути
      </button>
    </>
  );
};

export default HomePage;
