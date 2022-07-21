import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { shoppingCartSlice } from '../../store/reducers/shopping-cart/shopping-cart-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { OptionsButton } from '../components';
import ShoppingCartCard from './Shopping-cart-card';
import deleteIcon from '../../assets/icon/delete.svg';

const ShoppingCartList = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.shoppingCartSlice);
  const { changeQuantity, deleteItem, calcSumItem, calcSumAllItems, clear } =
    shoppingCartSlice.actions;

  const changeQuantityHandler = (id: string, quantity: number) => {
    dispatch(changeQuantity({ id, quantity }));
  };

  const deleteProduct = (id: string) => {
    dispatch(deleteItem({ id }));
  };

  const clearShoppingCart = () => {
    dispatch(clear());
  };

  useEffect(() => {
    dispatch(calcSumItem());
    dispatch(calcSumAllItems());
  });

  return (
    <>
      {items.length ? (
        <>
          <ShoppingCartListContainer>
            {items.map((item) => (
              <ShoppingCartCard
                item={item}
                changeQuantityHandler={changeQuantityHandler}
                deleteProduct={deleteProduct}
                key={item.product.id}
              />
            ))}
          </ShoppingCartListContainer>
          <ClearShoppingCart onClick={clearShoppingCart}>
            Очистить корзину
          </ClearShoppingCart>
        </>
      ) : (
        <ShoppingCartListText>
          Вы еще ничего не добавили в корзину
        </ShoppingCartListText>
      )}
    </>
  );
};

export default ShoppingCartList;

const ShoppingCartListContainer = styled.ul``;
const ShoppingCartListText = styled.p`
  width: 100%;
  padding: 50px 0;

  text-align: center;

  font-weight: 500;
  font-size: 24px;
`;

const ClearShoppingCart = styled(OptionsButton)`
  position: absolute;
  right: 10px;
  bottom: 16px;

  width: 190px;
  padding: 0 14px;

  border-bottom: none;

  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #c93e33;

  &::before {
    margin-right: 13px;
    background: url(${deleteIcon}) center no-repeat;
  }
`;
