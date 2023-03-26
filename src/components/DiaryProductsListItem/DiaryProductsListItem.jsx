import React from 'react';
import { GrClose } from 'react-icons/gr';

export const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  id,
  deleteProductId,
}) => {
  return (
    <li key={id}>
      <span>
        <span>{title} </span>
        <span>{weight} г</span>
        <span>{kcal} ккал </span>
        <button key={id} type="button" onClick={() => deleteProductId()}>
          <div style={{ background: 'white', color: '#9b9faa' }}>
            <GrClose
              style={{ background: 'white', color: '#9b9faa' }}
              id={id}
            />
          </div>
        </button>
      </span>
    </li>
  );
};
