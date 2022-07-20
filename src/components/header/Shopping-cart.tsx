import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import shoppingCartIcon from '../../assets/icon/shopping.svg';

interface ShoppingCartProps {
  quantity: number;
}

const ShoppingCart: FC<ShoppingCartProps> = ({ quantity }) => {
  return (
    <ShoppingCartContainer to='shopping-cart'>
      {!!quantity && <ShoppingCartQuantity>{quantity}</ShoppingCartQuantity>}
      <ShoppingCartIcon />
      <ShoppingCartTitle>Корзина</ShoppingCartTitle>
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;

const ShoppingCartContainer = styled(Link)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  margin: 0 0 0 auto;
`;

const ShoppingCartQuantity = styled.div`
  position: absolute;
  top: 0;
  right: 11px;

  width: 11px;
  height: 11px;
  background-color: #c93e33;
  border-radius: 50%;

  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 0.009em;
  color: #efefef;
`;

const ShoppingCartIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url(${shoppingCartIcon}) center no-repeat;
`;

const ShoppingCartTitle = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;

  color: #000000;
`;
