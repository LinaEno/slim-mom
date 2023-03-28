import styled from 'styled-components';

export const DatePickerWrapper = styled.button`
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
    font-size: 34px;
    line-height: 41.32px;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
`;
