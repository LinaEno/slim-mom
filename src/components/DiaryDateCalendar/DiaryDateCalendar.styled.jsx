import styled from 'styled-components';

export const DatePickerWrapper = styled.button`
  margin-top: 40px;
  text-align: left;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 21.88px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: transparent;
  color: #212121;

  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-top: 100px;

    font-size: 34px;
    line-height: 41.32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
`;
