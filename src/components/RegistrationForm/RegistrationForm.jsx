import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperation';

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
  Ribbon,
  Title,
} from './Registration.styled';

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
} from '../LoginForm/LoginForm.styled';
import css from './Ribbon.module.css';

const RegistrationForm = () => {

  const schema = yup
    .object({
      username: yup
        .string()
        .required('Введіть ваше імя')
        .min(3, 'Довжина імені повинна бути мінімум 3 символа')
        .max(254, 'Довжина імені повинна бути максимум 254 символа'),
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

  const onSubmit = ({ username, email, password }) => {
    dispatch(registration({ username, email, password }));

    reset();
  };

  const [ribbon, setRibbon] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    let score = 0;

    if (value.length > 5 && value.match(/[0-9]/g)) {
      score += 1;
    }

    if (value.length > 5 && value.match(/[a-z]/g)) {
      score += 1;
    }

    if (value.length > 5 && value.match(/[A-Z]/g)) {
      score += 1;
    }

    if (value.length > 5 && value.match(/[!@$%&*?_=/|#-().^+]/g)) {
      score += 1;
    }

    switch (score) {
      case 0:
        setRibbon('shortPass');
        break;

      case 1:
        setRibbon('easyPass');
        break;

      case 2:
        setRibbon('mediumPass');
        break;

      case 3:
        setRibbon('longPass');
        break;

      case 4:
        setRibbon('strongPass');
        break;

      default:
        break;
    }
  };

  return (
    <Section>
      <Content>
        <Title>Register</Title>
        <FormBox onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Label>
            <Input type="text" {...register('username')} placeholder="Name *" />
          </Label>
          {errors?.username && (
            <Error style={{ top: '11%' }}>{errors.username.message}</Error>
          )}
          <Label>
            <Input type="email" {...register('email')} placeholder="E-mail *" />
          </Label>
          {errors?.email && (
            <Error style={{ top: '33%' }}>{errors.email.message}</Error>
          )}
          <Label>
            <Input
              {...register('password')}
              placeholder="Password *"
              type={toggle ? 'text' : 'password'}
              onChange={handleChange}
            />
            <Ribbon>
              <div className={css[ribbon]} />
            </Ribbon>
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
            <Error style={{ top: '57%' }}>{errors.password.message}</Error>
          )}
          <ButtonsList>
            <ButtonActive type="submit">Register</ButtonActive>
            <Button type="submit">
              <StyledNavLink to={'/login'}>Log in</StyledNavLink>
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

export default RegistrationForm;
