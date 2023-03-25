import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 577px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.01px;
  letter-spacing: 4%;
  color: #000;
  margin-top: 16px;
`;

export const ItemName = styled.p`
  text-align: left;
  width: 240px;
  /* border-bottom: 1px solid #e0e0e0; */
  border-bottom: 1px solid #000;
  padding-bottom: 20px;
`;

export const ItemGrams = styled.p`
  text-align: right;
  width: 107px;
  /* border-bottom: 1px solid #e0e0e0; */
  border-bottom: 1px solid #000;
  /* margin: 0 8px; */
  padding-bottom: 20px;
`;

export const ItemCalories = styled.p`
  text-align: right;
  width: 106px;
  /* border-bottom: 1px solid #e0e0e0; */
  border-bottom: 1px solid #000;
  padding-bottom: 20px;
`;

export const Icon = styled.img`
  cursor: pointer;
  margin-left: 30px;
`;
