import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/authSelectors';
import { selectUserInfo } from 'redux/calories/selectors';

import { closeModal } from 'redux/global/slice';
import {
  BoxKcal,
  ButtonStart,
  ItemNotAllowed,
  Kcal,
  ListNotAllowed,
  SpanKcal,
  StyledNavLink,
  TextNotAllowed,
  Title,
  TitleNotAllowed,
  Wrapper,
} from './ModalRecommendation.styled';

const ModalRecommendation = () => {
  const recommendation = useSelector(selectUserInfo);
  console.log(recommendation);
  // const recommendation = useSelector(getUserData);
  // const { dailyRate, notAllowedProducts } = qwe;
  const dispatch = useDispatch();
  // console.log(recommendation);
  // console.log(dailyRate);
  // console.log(notAllowedProducts);

  const closeModalRecommendation = () => dispatch(closeModal());

  const notAllowedProductsFiltered = recommendation?.notAllowedProducts?.slice(
    0,
    4
  );

  return (
    <Wrapper>
      <Title>Ваша рекомендована щоденна доза споживання калорій складає</Title>
      <BoxKcal>
        <Kcal>
          {recommendation?.dailyRate && Math.round(recommendation.dailyRate)}
          <SpanKcal> ккал</SpanKcal>
        </Kcal>
        <TitleNotAllowed>Продукти, які Вам не слід вживати</TitleNotAllowed>
        <ListNotAllowed>
          {notAllowedProductsFiltered?.length > 0 &&
            notAllowedProductsFiltered.map(prod => {
              return (
                <ItemNotAllowed key={prod}>
                  <TextNotAllowed>{prod}</TextNotAllowed>
                </ItemNotAllowed>
              );
            })}
        </ListNotAllowed>
      </BoxKcal>
      <ButtonStart type="button" onClick={closeModalRecommendation}>
        <StyledNavLink to={'/'}>Почніть худнути</StyledNavLink>
      </ButtonStart>
    </Wrapper>
  );
};

export default ModalRecommendation;
