import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 32px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 610px;
    flex-direction: row;
    gap: 24px;
    margin-top: 50px;
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
    width: 633px;
    flex-direction: row;
  }
`;

export const AddBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const AddTitleInput = styled.input`
  border-style: none;
  background-color: transparent;
  border-bottom: 1px solid #e5e5e5;
  outline: none;
  width: 90vw;
  margin: 0 auto;

  &::placeholder {
    font-weight: 700;
    font-family: 'Jost', sans-serif;
    font-size: 14px;
    line-height: 17.01px;
    letter-spacing: 4%;
    color: #212121;
  }

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
    margin: 0;
  }
`;

export const AddWeightInput = styled.input`
  border-style: none;
  background-color: transparent;
  border-bottom: 1px solid #e5e5e5;
  text-align: left;
  outline: none;
  width: 90vw;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    text-align: right;
    width: 105px;
    margin: 0;
  }

  &::placeholder {
    font-weight: 700;
    font-family: 'Jost', sans-serif;
    font-size: 14px;
    line-height: 17.01px;
    letter-spacing: 4%;
    color: #212121;
  }
`;
