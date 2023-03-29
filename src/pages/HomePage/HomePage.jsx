import { useDispatch, useSelector } from 'react-redux';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';
// import { getUserInfo } from 'redux/auth/authOperation';
import { Container } from 'components/App/App.styled';
import {
  DiaryWrapper,
  WrapCont,
} from 'pages/CalculatorPage/CalculatorPage.styled';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { getInfo } from 'redux/diary/operations';
import { useEffect } from 'react';
import { selectDate } from 'redux/diary/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  useEffect(() => {
    dispatch(getInfo(date));
  }, [date, dispatch]);

  return (
    <Container>
      <WrapCont>
        <DiaryWrapper>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryProductsList />
        </DiaryWrapper>
        <CaloriesWrap />
      </WrapCont>
    </Container>
  );
};

export default HomePage;
