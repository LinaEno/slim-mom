import { Container } from 'components/App/App.styled';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import React from 'react';
import { DiaryWrapper, WrapCont } from './CalculatorPage.styled';
// import { useMediaQuery } from 'react-responsive';

const CalculatorPage = () => {
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

export default CalculatorPage;
