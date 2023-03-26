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
  TextNotAllowed,
  Title,
  TitleNotAllowed,
  Wrapper,
} from './ModalRecommendation.styled';

const ModalRecommendation = () => {
  // const recommendation = useSelector(getUserData);
  const recommendation = useSelector(getUserData);
  const { dailyRate, notAllowedProducts } = recommendation;
  const dispatch = useDispatch();

  const closeModalRecommendation = () => dispatch(closeModal());

  const notAllowedProductsFiltered = notAllowedProducts.slice(0, 4);

  return (
    <Wrapper>
      <Title>Ваша рекомендована щоденна доза споживання калорій складає</Title>
      <BoxKcal>
        <Kcal>
          {dailyRate}
          <SpanKcal> ккал</SpanKcal>
        </Kcal>
        <TitleNotAllowed>Продукти, які Вам не слід вживати</TitleNotAllowed>
        <ListNotAllowed>
          {notAllowedProductsFiltered?.length > 0 &&
            notAllowedProductsFiltered.map(prod => {
              return (
                <ItemNotAllowed>
                  <TextNotAllowed>{prod}</TextNotAllowed>
                </ItemNotAllowed>
              );
            })}
        </ListNotAllowed>
      </BoxKcal>
      <ButtonStart type="button" onClick={closeModalRecommendation} to={'/'}>
        Почніть худнути
      </ButtonStart>
    </Wrapper>
  );
};

export default ModalRecommendation;
