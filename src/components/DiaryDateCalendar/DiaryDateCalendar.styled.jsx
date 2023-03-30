import styled from 'styled-components';

export const DatePickerWrapper = styled.button`
  text-align: left;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 21.88px;
  font-family: 'Jost', sans-serif;
  background-color: transparent;
  color: #212121;
  /* display: block; */
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 20px;

  @media screen and (min-width: 480px) {
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 41.32px;
    margin: 0;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
`;
