import styled from 'styled-components';

export const Preview = styled.div`
  position: relative;
  display: block;
  margin: 20px 0 0 0;
  height: 320px;

  @media screen and (min-width: 1280px) {
    margin: 20px 90px 0 0;
  }
`;

export const IconSvg = styled.img`
  width: 230px;
  margin-top: 240px;
`;

export const Blueberry = styled.img`
  width: 30px;
  left: 20px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 900ms infinite;
  @keyframes dws-bounce {
    0% {
      transform: rotate(0);
      bottom: 100%;
    }

    25% {
      opacity: 1;
    }

    100% {
      transform: rotate(360deg);
      bottom: 0;
      opacity: 1;
    }
  }
`;

export const Blueberry3 = styled.img`
  width: 30px;
  left: 180px;
  position: absolute;
  opacity: 0;
  animation: dws-bounce 3500ms linear 2600ms infinite;
`;

export const Kivi1 = styled.img`
  width: 55px;
  left: 10px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 1800ms infinite;
`;

export const Kivi2 = styled.img`
  width: 55px;
  left: 100px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 3500ms infinite;
`;

export const Mandarin = styled.img`
  width: 55px;
  left: 140px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 1000ms infinite;
`;

export const Grape = styled.img`
  width: 35px;
  left: 17px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 2700ms infinite;
`;

export const Grape2 = styled.img`
  width: 35px;
  left: 170px;
  position: absolute;
  opacity: 0;
  animation: dws-bounce 3500ms linear 3600ms infinite;
`;

export const Banana = styled.img`
  width: 55px;
  left: 30px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 3400ms infinite;
`;

export const Banana2 = styled.img`
  width: 55px;
  left: 110px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 1800ms infinite;
`;

export const Strawberry = styled.img`
  width: 55px;
  left: 65px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 1000ms infinite;
`;

export const Apple = styled.img`
  width: 55px;
  left: 90px;
  position: absolute;
  opacity: 0;

  animation: dws-bounce 3500ms linear 2500ms infinite;
`;