import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import {
  Section,
  Content,
  FormBox,
  Label,
  Eye,
  Input,
  ButtonsList,
  Button,
  ButtonActive,
  StyledNavLink,
  Error,
  Title,
} from '../RegistrationForm/Registration.styled';
import svgIcon from '../../images/bowl_fruits.png';
import blueberry from '../../images/blueberry.png';
import kivi1 from '../../images/kivi1.png';
import mandarin from '../../images/mandarin.png';
import grape from '../../images/grape.png';
import banana from '../../images/banana.png';
import strawberry from '../../images/strawberry.png';
import apple from '../../images/apple.png';

import { Default } from '../Media/Media';

import {
  Preview,
  IconSvg,
  Blueberry,
  Blueberry3,
  Kivi1,
  Kivi2,
  Mandarin,
  Banana,
  Strawberry,
  Grape,
  Grape2,
  Apple,
  Banana2,
} from './LoginForm.styled';

const LoginForm = () => {

  const schema = yup
    .object({
      email: yup
        .string()
        .email()
        .required('Введіть електронну адресу')
        .min(3)
        .max(254),
      password: yup
        .string()
        .required('Введіть пароль')
        .min(8, 'Довжина пароля повинна бути мінімум 8 символів')
        .max(100, 'Довжина пароля повинна бути максимум 100 символів'),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));

    reset();
  };

  return (
    <Section>
      <Content>
        <Title>Log In</Title>
        <FormBox onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Label>
            <Input
              type="email"
              {...register('email')}
              placeholder="E-mail"
            />
          </Label>
          {errors?.email && (
            <Error style={{ top: '14%' }}>{errors.email.message}</Error>
          )}
          <Label>
            <Input
              type={toggle ? 'text' : 'password'}
              {...register('password')}
              placeholder="Password"
            />
            {!toggle ? (
              <Eye
                id="passlock"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <BsEyeSlashFill />
              </Eye>
            ) : (
              <Eye
                id="showpass"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <BsEyeFill />
              </Eye>
            )}
          </Label>
          {errors?.password && (
            <Error style={{ top: '42%' }}>{errors.password.message}</Error>
          )}
          <ButtonsList>
            <ButtonActive type="submit">Log in</ButtonActive>
            <Button type="submit">
              <StyledNavLink to={'/register'}>
              Register
              </StyledNavLink>
            </Button>
          </ButtonsList>
        </FormBox>
      </Content>
      <Default>
        <Preview>
          <Kivi1 src={kivi1} alt="kivi" />
          <Blueberry src={blueberry} alt="blueberry" />
          <Banana src={banana} alt="banana" />
          <Grape src={grape} alt="grape" />
          <Mandarin src={mandarin} alt="mandarin" />
          <Strawberry src={strawberry} alt="strawberry" />
          <Apple src={apple} alt="apple" />
          <Kivi2 src={kivi1} alt="kivi" />
          <Blueberry3 src={blueberry} alt="blueberry" />
          <Grape2 src={grape} alt="grape" />
          <Banana2 src={banana} alt="banana" />
          <IconSvg src={svgIcon} alt="img" />
        </Preview>
      </Default>
    </Section>
  );
};

export default LoginForm;
