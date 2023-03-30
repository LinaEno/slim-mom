import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getInfo } from 'redux/diary/operations';
import {
  selectDate,
  selectDayId,
  selectEatenProducts,
  selectPage,
  selectPerPage,
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
import { useRef } from 'react';
import { Pagination } from 'components/Pagination/Pagination';

export const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const day = useSelector(selectDayId);
  const date = useSelector(selectDate);
  const eatenProducts = useSelector(selectEatenProducts);

  const page = useSelector(selectPage);
  const itemsPerPage = useSelector(selectPerPage);
  const endOffset = page + itemsPerPage;
  const currentProducts = eatenProducts.slice(page, endOffset);

  const elementToScroll = useRef(null);

  const deleteProductId = e => {
    const dayIdObj = {
      dayId: day,
      eatenProductId: e.target.id,
    };

    dispatch(deleteProduct(dayIdObj))
      .unwrap()
      .then(() => {
        dispatch(getInfo(date));
      });
  };

  return (
    <UlWrapper>
      <UlStyled ref={elementToScroll}>
        {eatenProducts?.length > 0 &&
          currentProducts.map(({ id, kcal, title, weight }) => (
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
      {eatenProducts.length > itemsPerPage && (
        <Pagination scrollAnchor={elementToScroll} />
      )}
    </UlWrapper>
  );
};
