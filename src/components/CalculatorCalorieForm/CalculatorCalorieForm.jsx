import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { dailyCaloriesId } from 'redux/calories/operations';
import { selectUserId } from 'redux/auth/authSelectors';
import { openModalRecommendation } from 'redux/global/slice';
import {
  LabelTitle,
  Input,
  InputRadio,
  Button,
  Form,
  RadioBox,
  LabelRadio,
  Title,
  InputsWrapper,
  InputsRight,
  InputsLeft,
  TitleBloor,
  Wrapper,
} from './CalculatorCalorieForm.styled';
import { Error } from 'components/RegistrationForm/Registration.styled';

const schema = yup.object().shape({
  height: yup
    .number()
    .typeError('Повинно бути число')
    .min(100, 'Мінімальне значення 100 см')
    .max(220, 'Максимальне значення 220 см')
    .required("Обов'язкове поле"),
  age: yup
    .number()
    .typeError('Повинно бути число')
    .min(18, 'Мінімальне значення 18 років')
    .max(90, 'Максимальне значення 90 років')
    .required("Обов'язкове поле"),
  weight: yup
    .number()
    .typeError('Повинно бути число')
    .min(45, 'Мінімальне значення 45 кг')
    .max(200, 'Максимальне значення 200 кг')
    .required("Обов'язкове поле"),
  desiredWeight: yup
    .number()
    .typeError('Повинно бути число')
    .min(40, 'Мінімальне значення 40 кг')
    .max(200, 'Максимальне значення 200 кг')
    .required("Обов'язкове поле"),
  bloodType: yup
    .number()
    .typeError("Обов'язкове поле")
    .required("Обов'язкове поле"),
});

const CalculatorCalorieForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const onSubmit = data => {
    console.log(data);
    dispatch(dailyCaloriesId({ ...data, userId }));
  };

  const openModal = () => {
    dispatch(openModalRecommendation());
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Wrapper>
        <Title>Розрахуйте свою денну норму калорій прямо зараз</Title>
        <InputsWrapper>
          <InputsLeft>
            <LabelTitle>
              <Input
                type="number"
                {...register('height')}
                placeholder="Зріст *"
              />
            </LabelTitle>
            {errors?.height && (
              <Error style={{ top: '20%' }}>{errors.height.message}</Error>
            )}
            <LabelTitle>
              <Input type="number" {...register('age')} placeholder="Вік *" />
            </LabelTitle>
            {errors?.age && (
              <Error style={{ top: '62%' }}>{errors.age.message}</Error>
            )}
            <LabelTitle>
              <Input
                type="number"
                {...register('weight')}
                placeholder="Теперішня вага *"
              />
            </LabelTitle>
            {errors?.weight && (
              <Error style={{ top: '102%' }}>{errors.weight.message}</Error>
            )}
          </InputsLeft>
          <InputsRight>
            <LabelTitle>
              <Input
                type="number"
                {...register('desiredWeight')}
                placeholder="Бажана вага *"
              />
            </LabelTitle>
            {errors?.desiredWeight && (
              <Error style={{ top: '20%' }}>
                {errors.desiredWeight.message}
              </Error>
            )}
            <TitleBloor> Група крові * </TitleBloor>

            <RadioBox>
              <LabelRadio>
                <InputRadio
                  {...register('bloodType', { required: true })}
                  type="radio"
                  value="1"
                />
                1
              </LabelRadio>
              <LabelRadio>
                <InputRadio
                  {...register('bloodType', { required: true })}
                  type="radio"
                  value="2"
                />
                2
              </LabelRadio>
              <LabelRadio>
                <InputRadio
                  {...register('bloodType', { required: true })}
                  type="radio"
                  value="3"
                />
                3
              </LabelRadio>
              <LabelRadio>
                <InputRadio
                  {...register('bloodType', { required: true })}
                  type="radio"
                  value="4"
                />
                4
              </LabelRadio>
            </RadioBox>
            {errors?.bloodType && (
              <Error style={{ top: '56%', width: '250px' }}>
                {errors.bloodType.message}
              </Error>
            )}
          </InputsRight>
        </InputsWrapper>
      </Wrapper>
      <Button type="submit" onClick={openModal}>
        Почніть худнути
      </Button>
    </Form>
  );
};

export default CalculatorCalorieForm;
