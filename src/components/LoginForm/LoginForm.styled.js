import styled from 'styled-components';

export const Preview = styled.div`
  display: block;
  position: relative;
  /* margin: 180px 0 0 0; */
  height: 320px;

  @media screen and (min-width: 1280px) {
    margin: 100px 0 0 0;
  }
`;

export const IconSvg = styled.img`
  @media screen and (min-width: 768px) {
    width: 260px;
    margin-top: 250px;
  }

  @media screen and (min-width: 1280px) {
    width: 435px;
    height: 420px;
  }
`;

export const Blueberry = styled.img`
  width: 30px;
  left: 70px;
  position: absolute;

  animation: dws-bounce 2500ms linear infinite,
    dws-moveLeft 25s linear infinite alternate;
  @keyframes dws-bounce {
    0% {
      bottom: 100%;
    }

    100% {
      bottom: 0;
    }
  }
`;

export const Kivi1 = styled.img`
  width: 50px;
  left: 100px;
  margin-top: 10px;
  position: absolute;
  

  animation: dws-bounce 3s linear infinite,
    dws-moveLeft 15s linear infinite alternate;
  @keyframes dws-bounce {
    0% {
      bottom: 100%;
    }

    100% {
      bottom: 0;
    }
  }
`;