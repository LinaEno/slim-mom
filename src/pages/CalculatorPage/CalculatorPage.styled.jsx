import styled from 'styled-components';

export const WrapCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: start;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1280px;
  }
`;

export const DiaryWrapper = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  line-height: 17.01px;
  letter-spacing: 4%;
  color: #212121;

  margin: 0 auto;
  margin-top: 40px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 610px;
    margin-top: 60px;
    margin-left: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 633px;
    margin-right: 60px;
    margin-left: 0;
    margin-top: 60px;
  }
`;
