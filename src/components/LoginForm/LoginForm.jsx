import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import {
  Preview,
  LoginSection,
  Backdrop,
  Content,
  FormBox,
  LogoBox,
  Label,
  Eye,
  Input,
  ButtonsList,
  ButtonActive,
  Button,
  StyledNavLink,
  Error,
  IconSvg,
} from './LoginForm.styled';
import logo from '../../images/logo.png';
import svgIcon from '../../images/bowl_fruit.png';

// import emailIcon from '../../images/svg/email.svg';
// import passIcon from '../../images/svg/password.svg';
import { Desktop, Tablet, Mobile, Default } from '../Media/Media';

import { useTranslation } from 'react-i18next';
import { TitleH1 } from 'components/RegistrationForm/Registration.styled';

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
    <LoginSection>
      <Default>
        <Preview>
          <Tablet>
            <IconSvg
              src={svgIcon}
              alt="img"
              style={{ width: '260px', height: '250px' }}
            />
          </Tablet>
          <Desktop>
            <IconSvg
              src={svgIcon}
              alt="img"
              style={{ width: '435px', height: '420px' }}
            />
          </Desktop>
        </Preview>
      </Default>
      <Backdrop>
        <Content>
          <LogoBox>
            <Mobile>
              <img
                src={logo}
                alt="img"
                style={{ width: '46px', height: '44px' }}
              />
            </Mobile>
            <Tablet>
              <img
                src={logo}
                alt="img"
                style={{ width: '46px', height: '44px' }}
              />
            </Tablet>
            <Desktop>
              <img
                src={logo}
                alt="img"
                style={{ width: '70px', height: '66px' }}
              />
            </Desktop>
            <TitleH1>Log In</TitleH1>
          </LogoBox>
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
              {/* <Icon src={passIcon} alt="email" /> */}
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
              <ButtonActive type="submit">
                {t('register.btnLogIn')}
              </ButtonActive>
              <Button type="submit">
                <StyledNavLink to={'/register'}>
                  {t('register.btnReg')}
                </StyledNavLink>
              </Button>
            </ButtonsList>
          </FormBox>
        </Content>
      </Backdrop>
    </LoginSection>
  );
};

export default LoginForm;
