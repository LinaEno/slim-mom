import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { dailyCaloriesId } from 'redux/calories/operations';
import { selectUserId } from 'redux/auth/authSelectors';
import { openModalRecommendation } from 'redux/global/slice';

const CalculatorCalorieForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    //  resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const onSubmit = data => {
    const d = dispatch(dailyCaloriesId({ ...data, userId }));
    console.log(d);
    reset();
  };

  const openModal = () => {
    dispatch(openModalRecommendation());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label>
        Зріст *
        <input type="number" {...register('height')} placeholder="Зріст" />
      </label>

      <label>
        Вік *
        <input type="number" {...register('age')} placeholder="Вік" />
      </label>

      <label>
        Теперішня вага*
        <input
          type="number"
          {...register('weight')}
          placeholder="Теперішня вага"
        />
      </label>

      <label>
        Бажана вага *
        <input
          type="number"
          {...register('desiredWeight')}
          placeholder="Бажана вага"
        />
      </label>

      <p> Група крові *</p>

      <div>
        <input
          {...register('bloodType', { required: true })}
          type="radio"
          value="1"
        />
        <input
          {...register('bloodType', { required: true })}
          type="radio"
          value="2"
        />
        <input
          {...register('bloodType', { required: true })}
          type="radio"
          value="3"
        />
        <input
          {...register('bloodType', { required: true })}
          type="radio"
          value="4"
        />
      </div>
      <button type="submit" onClick={openModal}>
        Почніть худнути
      </button>
    </form>
  );
};

export default CalculatorCalorieForm;
