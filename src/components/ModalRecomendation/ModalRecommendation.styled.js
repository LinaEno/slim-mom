import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 592px;
    min-height: 492px;
  }
`;

export const BoxKcal = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0 131px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: calc(25 / 18);
  margin-bottom: 42px;
  color: #212121;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(36 / 26);
    text-align: center;
    margin: 24px 42px 20px;
  }
`;

export const Kcal = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: calc(58 / 48);
  text-align: center;
  letter-spacing: 0.04em;
  padding-bottom: 32px;
  border-bottom: 1px solid #e0e0e0;
  color: #264061;
`;
export const SpanKcal = styled.span`
  font-size: 18px;
  color: #264061;
`;

export const TitleNotAllowed = styled.h3`
  font-size: 14px;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  color: #212121;
  margin-top: 12px;
`;

export const ListNotAllowed = styled.ol`
  margin-top: 20px;
  padding-left: 20px;
  color: #9b9faa;
`;
export const ItemNotAllowed = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TextNotAllowed = styled.p`
  font-size: 14px;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const ButtonStart = styled.button`
  height: 43px;
  width: 210px;
  font-family: 'Jost', sans-serif;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #fff;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  font-size: 14px;
  line-height: calc(17 / 14);
  font-weight: 700;
  display: block;
  margin: 40px auto;

  &:hover {
    border: 2px solid #fc842d;
    background-color: #fff;
    color: #fc842d;
    box-shadow: 0px 4px 10px #fff;
  }
`;
