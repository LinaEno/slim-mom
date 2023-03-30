import styled from 'styled-components';

export const UlWrapper = styled.div`
  margin-top: 32px;
  font-weight: 400;
`;

export const UlStyled = styled.ul`
  /* width: 100%; */

  &:first-child {
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-top: 60px;
    }
  }
`;

export const LiStyle = styled.li`
  display: flex;
  width: 90%;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:last-child {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 610px;
    margin: 0;
  }
`;

export const Title = styled.p`
  position: relative;
  width: 100%;
  margin-right: 8px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 240px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }
`;

export const Weight = styled.p`
  position: relative;
  width: 100%;
  margin-right: 8px;
  text-align: right;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 106px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 106px;
    margin-right: 32px;
  }
`;

export const Calorie = styled.p`
  position: relative;
  width: 100%;
  margin-right: 17px;
  text-align: right;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 106px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const DelBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`;
