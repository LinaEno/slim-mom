import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getUserCaloriesInfo } from 'redux/calories/operations';
import { selectUserInfo } from 'redux/calories/selectors';
import {
  CaloriesEl,
  CaloriesText,
  CaloriesTitle,
  Wrapper,
} from './styledCaloriesWrap';

export const CaloriesWrap = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  useEffect(() => {
    dispatch(getUserCaloriesInfo());
  }, [dispatch, userInfo]);
  return (
    <section>
      <h2 style={{ display: 'none' }}>Summary</h2>
      <Wrapper>
        <div>
          <CaloriesTitle>Summary for today</CaloriesTitle>
          <CaloriesEl>
            <CaloriesText>Left</CaloriesText>
            <CaloriesText>00</CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Consumed</CaloriesText>
            <CaloriesText></CaloriesText>00
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Daily rate</CaloriesText>
            <CaloriesText>00</CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>n% of normal</CaloriesText>
            <CaloriesText>00</CaloriesText>
          </CaloriesEl>
        </div>
        <div>
          <CaloriesTitle>Food not recommended</CaloriesTitle>
          <p>Your diet will be displayed here</p>
        </div>
      </Wrapper>
    </section>
  );
};
