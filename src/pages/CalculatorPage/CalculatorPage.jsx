import { Container } from 'components/App/App.styled';
import { CaloriesWrap } from 'components/CaloriesWrap/CaloriesWrap';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import React from 'react';

const CalculatorPage = () => {
  return (
    <Container>
      <div>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </div>
      <CaloriesWrap />
    </Container>
  );
};

export default CalculatorPage;
