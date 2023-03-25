import { DiaryProductsListItem } from 'components/DiaryProductsListItem/DiaryProductsListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getInfo } from 'redux/diary/operations';
import {
  selectDate,
  selectDayId,
  selectEatenProducts,
  selectItemId,
  selectProducts,
} from 'redux/diary/selectors';
import { GrClose } from 'react-icons/gr';

export const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const day = useSelector(selectDayId);
  const products = useSelector(selectProducts);
  const idProduct = useSelector(selectItemId);
  const date = useSelector(selectDate);
  const eatenProducts = useSelector(selectEatenProducts);
  //   console.log(idProduct);
  //   console.log(eatenProducts);

  const deleteProductId = e => {
    console.log(e);
    const dayIdObj = {
      dayId: day,
      eatenProductId: e.target.id,
      //   eatenProductId: eatenProducts.id,
    };

    console.log(dayIdObj);
    // localStorage.setItem('dayIdObj', JSON.stringify(dayIdObj));
    dispatch(deleteProduct(dayIdObj))
      .unwrap()
      .then(() => {
        dispatch(getInfo({ date }));
      });
  };

  //   return (
  //     <div>
  //       <ul>
  //         {eatenProducts?.length > 0 &&
  //           eatenProducts.map(({ id, kcal, title, weight }) => (
  //             <DiaryProductsListItem
  //               key={id}
  //               id={id}
  //               title={title}
  //               weight={weight}
  //               kcal={Math.round(kcal)}
  //               deleteProductId={deleteProductId}
  //             />
  //           ))}
  //       </ul>
  //     </div>
  //     );
  //   const deletedProduct = JSON.parse(localStorage.getItem('dayIdObj'));
  //   console.log(deletedProduct);
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
