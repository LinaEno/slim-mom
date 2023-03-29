import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/authSelectors';

import { getInfo } from 'redux/diary/operations';
import { selectDate, selectSummary } from 'redux/diary/selectors';
import {
  CaloriesEl,
  CaloriesText,
  CaloriesTitle,
  CaloriesTitleFood,
  Section,
  SectionSummary,
  Wrapper,
} from './CaloriesWrap.styled';

export const CaloriesWrap = () => {
  const dispatch = useDispatch();
  const userSummary = useSelector(selectSummary);
  const date = useSelector(selectDate);
  const recommendation = useSelector(getUserData);

  const notAllowedProductsFiltered = recommendation?.notAllowedProducts?.slice(
    0,
    4
  );

  useEffect(() => {
    dispatch(getInfo(date));
  }, [date, dispatch]);

  return (
    <Section>
      <h2 style={{ display: 'none' }}>Summary</h2>
      <Wrapper>
        <SectionSummary>
          <CaloriesTitle>Загалом за сьогодні</CaloriesTitle>
          <CaloriesEl>
            <CaloriesText>Залишилось</CaloriesText>
            <CaloriesText>
              {userSummary?.kcalLeft ? userSummary.kcalLeft : '0'} kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Спожито</CaloriesText>
            <CaloriesText>
              {userSummary?.kcalConsumed ? userSummary.kcalConsumed : '0'} kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Денна норма</CaloriesText>
            <CaloriesText>
              {userSummary?.dailyRate ? userSummary.dailyRate : '0'} kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>% від норми</CaloriesText>
            <CaloriesText>
              {userSummary?.percentsOfDailyRate
                ? Math.round(userSummary.percentsOfDailyRate)
                : '0'}
              %
            </CaloriesText>
          </CaloriesEl>
        </SectionSummary>
        <section>
          <CaloriesTitleFood>Нерекомендована їжа</CaloriesTitleFood>
          {notAllowedProductsFiltered?.length > 0 ? (
            notAllowedProductsFiltered.map(prod => {
              return <CaloriesText key={prod}>{prod}</CaloriesText>;
            })
          ) : (
            <CaloriesText>Ваша дієта буде тут</CaloriesText>
          )}
        </section>
      </Wrapper>
    </Section>
  );
};
