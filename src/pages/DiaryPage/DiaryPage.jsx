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
import { selectDate, selectSummary } from 'redux/diary/selectors';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const summary = useSelector(selectSummary);

  useEffect(() => {
    if (summary === null) return;
    dispatch(getInfo(date));
  }, [date, dispatch, summary]);

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

export default DiaryPage;
