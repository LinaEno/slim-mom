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
  TitleBloor ,
  Wrapper,
} from './CalculatorCalorieForm.styled';

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
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Title>Розрахуйте свою денну норму <br /> калорій прямо зараз</Title>
      <Wrapper>
        <InputsWrapper>
          <InputsLeft>
            <LabelTitle>
            
        <Input type="number" {...register('height')} placeholder="Зріст *" />
      </LabelTitle>

      <LabelTitle>
      
        <Input type="number" {...register('age')} placeholder="Вік *" />
      </LabelTitle>

      <LabelTitle>
        {/* Теперішня вага* */}
        <Input
          type="number"
          {...register('weight')}
          placeholder="Теперішня вага *"
        />
      </LabelTitle>
          </InputsLeft>
          <InputsRight>
      <LabelTitle>
        {/* Бажана вага * */}
        <Input
          type="number"
          {...register('desiredWeight')}
          placeholder="Бажана вага *"
        />
      </LabelTitle>

      <TitleBloor > Група крові * </TitleBloor >
      
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
