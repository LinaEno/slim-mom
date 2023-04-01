import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/calories/selectors';
import { selectisLoading } from 'redux/global/selectors';

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
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const ModalRecommendation = () => {
  const recommendation = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const closeModalRecommendation = () => dispatch(closeModal());

  const notAllowedProductsFiltered = recommendation?.notAllowedProducts?.slice(
    0,
    4
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Title>
            Ваша рекомендована щоденна доза споживання калорій складає
          </Title>
          <BoxKcal>
            <Kcal>
              {recommendation?.dailyRate &&
                Math.round(recommendation.dailyRate)}
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
            <StyledNavLink to={isLoggedIn ? '/diary' : '/login'}>
              Почніть худнути
            </StyledNavLink>
          </ButtonStart>
        </Wrapper>
      )}
    </>
  );
};

export default ModalRecommendation;
