import styled from 'styled-components';

export const UlWrapper = styled.div`
  margin-top: 32px;
  font-weight: 400;
`;

export const UlStyled = styled.ul`
  /* width: 100%; */
  overflow-y: scroll;
  scroll-behavior: smooth;
  max-height: 358px;

  &:first-child {
    margin-top: 30px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-top: 60px;
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const LiStyle = styled.li`
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-items: stretch;

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
    width: 602px;
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
  padding-bottom: 16px;

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
