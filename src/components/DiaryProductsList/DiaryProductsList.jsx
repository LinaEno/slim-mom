import { DiaryProductsListItem } from 'components/DiaryProductsListItem/DiaryProductsListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getInfo } from 'redux/diary/operations';
import {
  selectDate,
  selectDayId,
  selectEatenProducts,
} from 'redux/diary/selectors';
import { GrClose } from 'react-icons/gr';

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
        dispatch(getInfo(date));
      });
  };

  return (
    <div>
      <ul>
        {eatenProducts?.length > 0 &&
          eatenProducts.map(({ id, kcal, title, weight }) => (
            <li key={id}>
              <span>{title} </span>
              <span>{weight} г</span>
              <span>{Math.round(kcal)} ккал </span>
              <button id={id} type="button" onClick={deleteProductId}>
                <GrClose
                  style={{ background: 'white', color: '#9b9faa' }}
                  id={id}
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
