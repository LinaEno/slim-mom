import styled from 'styled-components';
export const Section = styled.section`
  padding: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    padding: 0;
    width: 40%;
  }
`;
export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* color: #540e0e;
 */
  color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 40px 20px 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const CaloriesEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CaloriesTitle = styled.h3`
  margin-bottom: 20px;
`;
export const CaloriesText = styled.p`
  margin-bottom: 10px;
`;
