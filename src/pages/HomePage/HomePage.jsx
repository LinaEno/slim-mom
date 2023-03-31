import { useDispatch, useSelector } from 'react-redux';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';
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
import { selectUserInfo } from 'redux/calories/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const user = useSelector(selectUserInfo);

  useEffect(() => {
    if (user === null) return;
    dispatch(getInfo(date));
  }, [date, dispatch, user]);

  return (
    <Container>
      <WrapCont>
        <DiaryWrapper>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryProductsList />
        </DiaryWrapper>
      </WrapCont>
      <CaloriesWrap />
    </Container>
  );
};

export default HomePage;
