import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { shoppingCartSlice } from '../../store/reducers/shopping-cart/shopping-cart-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import ShoppingCartCard from './Shopping-cart-card';

const ShoppingCartList = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.shoppingCartSlice);
  const { changeQuantity, deleteItem, calcSumItem, calcSumAllItems } =
    shoppingCartSlice.actions;

  const changeQuantityHandler = (id: string, quantity: number) => {
    dispatch(changeQuantity({ id, quantity }));
  };

  const deleteProduct = (id: string) => {
    dispatch(deleteItem({ id }));
  };

  useEffect(() => {
    dispatch(calcSumItem());
    dispatch(calcSumAllItems());
  });

  return (
    <>
      {items.length ? (
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
