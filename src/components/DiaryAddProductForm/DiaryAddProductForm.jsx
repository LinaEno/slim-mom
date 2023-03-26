import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../../redux/diary/operations';
import { addProduct, getInfo } from 'redux/diary/operations';

// import ButtonIcon from '../../images/buttonDiary.png';
import { selectDate, selectProducts } from 'redux/diary/selectors';
import moment from 'moment/moment';
import { fetchCurrentUser } from 'redux/auth/authOperation';

export const DiaryAddProductForm = () => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState('');
  const [title, setTitle] = useState('');
  const products = useSelector(selectProducts);
  const date = useSelector(selectDate);

  console.log(date);
  // console.log(date);

  // useEffect(() => {
  //   dispatch(productSearch(date));
  // }, [date, dispatch]);

  const handleChangeProduct = e => {
    const { value } = e.target;
    if (value === '') return;
    setTitle(value);
    dispatch(productSearch(title));
  };
  const handleChangeWeight = e => {
    const { value } = e.target;
    setWeight(value);
  };

  // useEffect(() => {
  //   // dispatch(getInfo({ date: moment(date).format('yyyy-MM-DD') }));
  //   dispatch(getInfo(date));
  // }, [dispatch, date]);

  const reset = () => {
    setTitle('');
    setWeight('');
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
    // dispatch(getInfo(newProduct));
    dispatch(getInfo({ date }));

    // dispatch(addProduct(newProduct))
    //   .unwrap()
    //   .then(() => {
    //     dispatch(fetchCurrentUser());
    //     dispatch(getInfo(newProduct));
    //   });
    reset();
    e.target.reset();
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <div>
            <input
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
                products.map(prod => {
                  return (
                    <option
                      key={prod._id}
                      value={prod.title.ua}
                      id={prod._id}
                    />
                  );
                })}
            </datalist>

            <input
              onChange={handleChangeWeight}
              type="number"
              name="weight"
              value={weight}
              placeholder="Введіть грами"
              required
            />

            <button type="submit">+</button>
          </div>
        </div>
      </form>
    </div>
  );
};
