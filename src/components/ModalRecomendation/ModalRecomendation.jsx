import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/authSelectors';
import { closeModal } from 'redux/global/slice';
import { BoxKcal, ButtonStart, ItemNotAllowed, Kcal, ListNotAllowed, SpanKcal, TextNotAllowed, Title, TitleNotAllowed, Wrapper } from './ModalRecommendation.styled';

const ModalRecommendation = () => {
  const recommendation = useSelector(getUserData);
  const { dailyRate, notAllowedProducts } = recommendation;
  const dispatch = useDispatch();

  const closeModalRecommendation = () => dispatch(closeModal());

  //   console.log(recommendation);

  return (
    <Wrapper>
      <Title>Ваша рекомендована щоденна доза споживання калорій складає</Title>
      <BoxKcal>
          <Kcal>
            2800<SpanKcal> ккал</SpanKcal>
          </Kcal>
          <TitleNotAllowed>Продукти, які Вам не слід вживати</TitleNotAllowed>
          <ListNotAllowed>
            <ItemNotAllowed><TextNotAllowed>Борошняні вироби</TextNotAllowed></ItemNotAllowed>
            <ItemNotAllowed><TextNotAllowed>Молоко</TextNotAllowed></ItemNotAllowed>
            <ItemNotAllowed><TextNotAllowed>Червоне м'ясо</TextNotAllowed></ItemNotAllowed>
            <ItemNotAllowed><TextNotAllowed>Копченості</TextNotAllowed></ItemNotAllowed>
          </ListNotAllowed>
      </BoxKcal>
      <ButtonStart type="button" onClick={closeModalRecommendation} to={'/'}>
        Почніть худнути
      </ButtonStart>
    </Wrapper>
  );
};

export default ModalRecommendation;
