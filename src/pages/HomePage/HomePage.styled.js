import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 16px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 32px;
    flex-direction: row;
  }
`;
