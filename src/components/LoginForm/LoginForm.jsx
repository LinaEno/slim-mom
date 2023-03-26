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

import { Desktop, Tablet, Default } from '../Media/Media';

import { useTranslation } from 'react-i18next';
import { Preview, IconSvg, Blueberry, Kivi1 } from './LoginForm.styled';

const LoginForm = () => {
  const { t } = useTranslation();
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
              placeholder={t('register.email')}
            />
          </Label>
          {errors?.email && (
            <Error style={{ top: '14%' }}>{errors.email.message}</Error>
          )}
          <Label>
            <Input
              type={toggle ? 'text' : 'password'}
              {...register('password')}
              placeholder={t('register.password')}
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
            <ButtonActive type="submit">{t('register.btnLogIn')}</ButtonActive>
            <Button type="submit">
              <StyledNavLink to={'/register'}>
                {t('register.btnReg')}
              </StyledNavLink>
            </Button>
          </ButtonsList>
        </FormBox>
      </Content>
      <Default>
        <Preview>
          <Tablet>
            <Blueberry src={blueberry} alt="blueberry" />
            <Kivi1 src={kivi1} alt="kivi" />
            <IconSvg src={svgIcon} alt="img" />
          </Tablet>
          <Desktop>
            <IconSvg src={svgIcon} alt="img" />
          </Desktop>
        </Preview>
      </Default>
    </Section>
  );
};

export default LoginForm;
