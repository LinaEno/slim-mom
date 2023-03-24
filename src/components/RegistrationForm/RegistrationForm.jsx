import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperation';

import { useEffect, useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

import {
  Preview,
  RegisterSection,
  Backdrop,
  Content,
  FormBox,
  LogoBox,
  Label,
  Eye,
  Input,
  ButtonsList,
  Button,
  ButtonActive,
  StyledNavLink,
  Error,
  Ribbon,
  IconSvg,
  TitleH1,
} from './Registration.styled';

import { Desktop, Tablet, Mobile, Default } from '../Media/Media';
import css from './Ribbon.module.css';

import svgIcon from '../../images/bowl_vegetable2.png';
import logo from '../../images/logo.png';

const RegistrationForm = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      username: yup
        .string()
        .required(t('Введіть ваше імя'))
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
  const [pass, setPass] = useState('pass');

  useEffect(() => {
    if (pass.length > 5) {
      setRibbon('putPass');
    } else if (pass.length <= 5) {
      setRibbon('shortPass');
    }
  }, [pass]);

  const handleChange = event => {
    const { value } = event.target;
    setPass(value);
  };

  return (
    <RegisterSection>
      <Default>
        <Preview>
          <Tablet>
            <IconSvg
              src={svgIcon}
              alt="vegetable"
              style={{ width: '260px', height: '250px' }}
            />
          </Tablet>
          <Desktop>
            <IconSvg
              src={svgIcon}
              alt="vegetable"
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
            <TitleH1>Register</TitleH1>
          </LogoBox>

          <FormBox onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Label>
              <Input
                type="text"
                {...register('username')}
                placeholder={t('register.name')}
              />
            </Label>
            {errors?.username && (
              <Error style={{ top: '62%' }}>{errors.username.message}</Error>
            )}
            <Label>
              <Input
                type="email"
                {...register('email')}
                placeholder={t('register.email')}
              />
            </Label>
            {errors?.email && (
              <Error style={{ top: '9%' }}>{errors.email.message}</Error>
            )}
            <Label>
              <Input
                {...register('password')}
                placeholder={t('register.password')}
                type={toggle ? 'text' : 'password'}
                onChange={handleChange}
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
              <Error style={{ top: '27%' }}>{errors.password.message}</Error>
            )}
            <Ribbon>
              <div className={css[ribbon]} />
            </Ribbon>

            <ButtonsList>
              <ButtonActive type="submit">{t('register.btnReg')}</ButtonActive>
              <Button type="submit">
                <StyledNavLink to={'/login'}>
                  {t('register.btnLogIn')}
                </StyledNavLink>
              </Button>
            </ButtonsList>
          </FormBox>
        </Content>
      </Backdrop>
    </RegisterSection>
  );
};

export default RegistrationForm;
