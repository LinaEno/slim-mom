import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getInfo } from 'redux/diary/operations';
import {
  selectDate,
  selectDayId,
  selectEatenProducts,
} from 'redux/diary/selectors';

import {
  Calorie,
  DelBtn,
  LiStyle,
  Title,
  UlStyled,
  UlWrapper,
  Weight,
} from 'components/DiaryProductsList/DiaryProductList.styled';
import CloseDiary from '../../images/closeDiary.svg';

export const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const day = useSelector(selectDayId);
  const date = useSelector(selectDate);
  const eatenProducts = useSelector(selectEatenProducts);

  const deleteProductId = e => {
    const dayIdObj = {
      dayId: day,
      eatenProductId: e.target.id,
    };

    dispatch(deleteProduct(dayIdObj))
      .unwrap()
      .then(() => {
        dispatch(getInfo({ date }));
      });
  };

  // const dispatch = useDispatch();
  // const date = useSelector(state => state.products.currentDate);
  // const products = useSelector(state => state.products.items);
  // const idDay = useSelector(state => state.products.dayId);

  // const deleteProduct = e => {
  //   const dayIdObj = {
  //     dayId: idDay,
  //     eatenProductId: e.target.id,
  //   };

  //   localStorage.setItem('dayIdObj', JSON.stringify(dayIdObj));
  //   dispatch(deleteProductOperation(dayIdObj))
  //     .unwrap()
  //     .then(() => {
  //       dispatch(userDayInfoOperation({ date }));
  //     });
  // };

  return (
    <UlWrapper>
      <UlStyled>
        {eatenProducts?.length > 0 &&
          eatenProducts.map(({ id, kcal, title, weight }) => (
            <LiStyle key={id}>
              <Title>{title} </Title>
              <Weight>{weight} г</Weight>
              <Calorie>{Math.round(kcal)} ккал </Calorie>
              <DelBtn id={id} type="button" onClick={deleteProductId}>
                <img src={CloseDiary} alt="close cross" id={id} />
              </DelBtn>
            </LiStyle>
          ))}
      </UlStyled>
    </UlWrapper>
  );
};
