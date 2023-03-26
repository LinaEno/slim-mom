import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../../redux/diary/operations';
import { addProduct, getInfo } from 'redux/diary/operations';

// import ButtonIcon from '../../images/buttonDiary.png';
import { selectDate, selectProducts } from 'redux/diary/selectors';
import { DebounceInput } from 'react-debounce-input';
import moment from 'moment/moment';

export const DiaryAddProductForm = () => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState('');
  const [title, setTitle] = useState('');
  const products = useSelector(selectProducts);
  const date = useSelector(selectDate);

  console.log(products);
  console.log(date);

  useEffect(() => {
    dispatch(productSearch(date));
  });

  const handleChangeProduct = e => {
    const { value } = e.target;
    setTitle(value);
    dispatch(productSearch(title));
  };
  const handleChangeWeight = e => {
    const { value } = e.target;
    setWeight(value);
    dispatch(productSearch(weight));
  };

  useEffect(() => {
    dispatch(getInfo({ date: moment(date).format('yyyy-MM-DD') }));
  }, [dispatch, date]);

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
    // .unwrap()
    // .then(() => {
    //   dispatch(fetchCurrentUser());
    //   dispatch(getInfo({ date }));
    // });
    reset();
    e.target.reset();
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <div>
            {/* <input
              list="listProducts"
              type="text"
              name="product"
              
              value={product}
              onChange={handleChangeProduct}
            /> */}
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
              debounceTimeout={1000}
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
