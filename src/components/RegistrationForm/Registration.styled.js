import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #fff;
  height: 100vh;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    min-width: 350px;
    margin-top: 100px;
    margin-right: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 140px;
  }
`;

export const Title = styled.h1`
  font-family: Verdana, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fc842d;

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

export const FormBox = styled.form`
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  position: relative;
  height: 36px;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 240px;
  }

  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 36px;
  padding: 10px 0 10px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: #000;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  &::placeholder {
    font: inherit;
    font-weight: 700;
    font-size: 14px;
    color: #9b9faa;
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    color: #000;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }

  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const Eye = styled.i`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #bdbdbd;
`;

export const ButtonsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    height: 108px;
  }
`;

export const Button = styled.button`
  height: 44px;
  width: 182px;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #fc842d;
  background-color: #fff;
  box-shadow: 0px 4px 10px #fff;
  font-size: 14px;
  line-height: calc(17 / 14);
  font-weight: 700;
  display: block;

  &:hover {
    border: 2px solid #fc842d;
    background-color: #fc842d;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1280px) {
    width: 182px;
  }
`;

export const ButtonActive = styled.button`
  height: 44px;
  width: 182px;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #fff;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  font-size: 14px;
  line-height: calc(17 / 14);
  font-weight: 700;
  display: block;

  &:hover {
    border: 2px solid #fc842d;
    background-color: #fff;
    color: #fc842d;
    box-shadow: 0px 4px 10px #fff;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1280px) {
    width: 182px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fc842d;
  &:hover {
    color: #fff;
  }
`;

export const Error = styled.div`
  color: red;
  position: absolute;
  z-index: 1;
`;

export const Ribbon = styled.div`
  position: relative;
  border-bottom: 4px solid rgba(252, 132, 45, 0.3);
  width: 100%;
  margin-top: 4px;
  border-radius: 10px;
`;
