import { useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/authSelectors';
import { selectSummary } from 'redux/diary/selectors';
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
  const userSummary = useSelector(selectSummary);

  const recommendation = useSelector(getUserData);

  const notAllowedProductsFiltered = recommendation?.notAllowedProducts?.slice(
    0,
    4
  );

  return (
    <Section>
      <h2 style={{ display: 'none' }}>Summary</h2>
      <Wrapper>
        <SectionSummary>
          <CaloriesTitle>Загалом за сьогодні</CaloriesTitle>
          <CaloriesEl>
            <CaloriesText>Залишилось</CaloriesText>
            <CaloriesText>
              {userSummary?.kcalLeft ? Math.round(userSummary.kcalLeft) : '000'}{' '}
              kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Спожито</CaloriesText>
            <CaloriesText>
              {userSummary?.kcalConsumed
                ? Math.round(userSummary.kcalConsumed)
                : '000'}{' '}
              kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>Денна норма</CaloriesText>
            <CaloriesText>
              {userSummary?.dailyRate
                ? Math.round(userSummary.dailyRate)
                : '000'}{' '}
              kcal
            </CaloriesText>
          </CaloriesEl>
          <CaloriesEl>
            <CaloriesText>% від норми</CaloriesText>
            <CaloriesText>
              {userSummary?.percentsOfDailyRate
                ? Math.round(userSummary.percentsOfDailyRate)
                : '00'}
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
