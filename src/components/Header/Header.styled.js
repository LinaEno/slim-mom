import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: #ffffff;
  border-bottom: 2px solid #e0e0e0;

  @media screen and (min-width: 768px) {
    border-bottom: none;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 80px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 0;
    margin-bottom: 5px;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 100;
  line-height: calc(24 / 20);
  text-align: center;
  color: #212121;
  margin-top: 9px;
  margin-right: 20px;

   @media screen and (min-width: 1280px) {
    padding-top: 35px;
    margin-left: -10px;
  }
`;

export const Span = styled.span`
  color: #fc842d;
`;

export const UserBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: end;
  height: 50px;
  background-color: #EFF1F3;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  background-color: transparent;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 20px;
  }
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: calc(17 / 14);
  letter-spacing: 0.04em;
  color: #212121;
`;

export const Delimiter = styled.span`
  display: block;
  width: 1px;
  height: 32px;
  background-color: #E0E0E0;
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    gap: 12px;
    & img {
      width: 40px;
      height: 40px;
      background: url(.png);
      border-radius: 3px;
  }
`;
