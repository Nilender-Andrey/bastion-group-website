import React from 'react';
import styled from 'styled-components/macro';
import warningIcon from '../../assets/icon/warning.svg';
import ShoppingCartList from './Shopping-cart-list';

const LeftBlock = () => {
  return (
    <LeftBlockContainer>
      <Info>
        Извините, но указанное ранее количество товара недоступно. Установлено
        ближайшее доступное значение.
      </Info>

      <ShoppingCartList />
    </LeftBlockContainer>
  );
};

export default LeftBlock;

const LeftBlockContainer = styled.div`
  flex: 1 1 auto;
  height: 100%;

  border: 1px solid #e6e6e6;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 19px 0 21px 17px;

  border-bottom: 1px solid #e6e6e6;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;

  color: #b3b3b3;

  &::before {
    content: '';
    display: inline-block;

    width: 16px;
    height: 16px;

    background: url(${warningIcon}) center no-repeat;
  }
`;
