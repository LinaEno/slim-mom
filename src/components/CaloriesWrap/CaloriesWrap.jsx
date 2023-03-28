import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/authSelectors';
// import { useMediaQuery } from 'react-responsive';

import { getInfo } from 'redux/diary/operations';
import { selectDate, selectSummary } from 'redux/diary/selectors';
import {
  CaloriesEl,
  CaloriesText,
  CaloriesTitle,
  Section,
  Wrapper,
} from './styledCaloriesWrap';

export const CaloriesWrap = () => {
  const dispatch = useDispatch();
  const userSummary = useSelector(selectSummary);
  const date = useSelector(selectDate);
  const recommendation = useSelector(getUserData);
  // const { notAllowedProducts } = recommendation;

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
        <div>
          <CaloriesTitle>Summary for today</CaloriesTitle>
          <CaloriesEl>
            <CaloriesText>Left</CaloriesText>
            <CaloriesText>
              {userSummary?.kcalLeft ? userSummary.kcalLeft : '0'} kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Consumed</CaloriesText>
            <CaloriesText>
              {userSummary?.kcalConsumed ? userSummary.kcalConsumed : '0'} kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Daily rate</CaloriesText>
            <CaloriesText>
              {userSummary?.dailyRate ? userSummary.dailyRate : '0'} kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>
              {userSummary?.percentsOfDailyRate
                ? Math.round(userSummary.percentsOfDailyRate)
                : '0'}
              % of normal
            </CaloriesText>
          </CaloriesEl>
        </div>
        <div>
          <CaloriesTitle>Food not recommended</CaloriesTitle>
          {notAllowedProductsFiltered?.length > 0 ? (
            notAllowedProductsFiltered.map(prod => {
              return <CaloriesText key={prod}>{prod}</CaloriesText>;
            })
          ) : (
            <CaloriesText>Your diet will be displayed here</CaloriesText>
          )}
        </div>
      </Wrapper>
    </Section>
  );
};
