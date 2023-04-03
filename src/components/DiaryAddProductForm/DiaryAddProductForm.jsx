import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../../redux/diary/operations';
import { addProduct, getInfo } from 'redux/diary/operations';
import { selectDate, selectProducts } from 'redux/diary/selectors';
import AddDiary from '../../images/addDiary.svg';
import {
  AddBtn,
  AddTitleInput,
  AddWeightInput,
  Wrap,
} from './DiaryAddProductForm.styled';
import moment from 'moment/moment';

export const DiaryAddProductForm = () => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState('');
  const [title, setTitle] = useState('');
  const products = useSelector(selectProducts);
  const date = useSelector(selectDate);

  useEffect(() => {
    dispatch(getInfo({ date: moment(date).format('yyyy-MM-DD') }));
  }, [dispatch, date]);

  useEffect(() => {
    if (title.length >= 2) dispatch(productSearch(title));
  }, [dispatch, title]);

  const handleChangeProduct = e => {
    const { value } = e.currentTarget;
    setTitle(value);
  };
  const handleChangeWeight = e => {
    const { value } = e.currentTarget;
    setWeight(value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const productId = products.find(prod => prod.title.ua === title)._id;
    const newProduct = {
      date,
      productId,
      weight,
    };
    dispatch(addProduct(newProduct));
    dispatch(getInfo({ date }));

    reset();
  }

  const reset = () => {
    setTitle('');
    setWeight('');
  };

  console.log(products);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Wrap>
        <AddTitleInput
          onChange={handleChangeProduct}
          type="text"
          name="title"
          value={title}
          placeholder="Введіть назву продукту"
          list="listProducts"
          required
        />
        <datalist id="listProducts">
          {products?.length > 0 &&
            products?.map(prod => {
              return (
                <option key={prod._id} value={prod.title.ua} id={prod._id} />
              );
            })}
        </datalist>

        <AddWeightInput
          onChange={handleChangeWeight}
          type="number"
          name="weight"
          value={weight}
          placeholder="Грами"
          required
        />

        <AddBtn type="submit">
          <img src={AddDiary} alt="Add button" />
        </AddBtn>
      </Wrap>
    </form>
  );
};
