import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 300px;
`;

export const DatePickerWrapper = styled.button`
  width: 219px;
  cursor: pointer;
  background-color: transparent;
  color: #212121;
  padding: 0px;
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 21.88px;

  @media (min-width: 480px) {
    font-size: 34px;
    line-height: 41.32px;
    font-weight: 700;
    width: 219px;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
`;
