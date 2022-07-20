import React from 'react';
import styled from 'styled-components/macro';
import { productsSlice } from '../../store/reducers/products/products-slice';
import { shoppingCartSlice } from '../../store/reducers/shopping-cart/shopping-cart-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { IShoppingCartItem } from '../../types/Product';
import GostList from './Gost-list';
import ProductsList from './Products-list';

const RightBlock = () => {
  const dispatch = useAppDispatch();
  const { select } = productsSlice.actions;
  const { addProduct } = shoppingCartSlice.actions;
  const {
    products,
    gostsSelected,
    gosts,
    productTypeFilter,
    minPriceFilter,
    maxPriceFilter,
    minPrice,
    maxPrice,
  } = useAppSelector((state) => state.productsSlice);

  let showProducts = gostsSelected.length
    ? products.filter((item) => gostsSelected.includes(item.gost))
    : products;

  showProducts = productTypeFilter
    ? showProducts.filter((item) => item.type === productTypeFilter)
    : showProducts;

  showProducts = showProducts.filter(
    (item) =>
      +item.price >= +(minPriceFilter || minPrice) &&
      +item.price <= +(maxPriceFilter || maxPrice),
  );

  const gostClickHandler = (value: string) => {
    dispatch(select(value));
  };

  const AddToShoppingCart = (value: IShoppingCartItem) => {
    dispatch(addProduct(value));
  };

  return (
    <RightBlockContainer>
      <GostList
        gostsSelected={gostsSelected}
        gosts={gosts}
        clickHandler={gostClickHandler}
      />
      <ProductsList
        products={showProducts}
        AddToShoppingCart={AddToShoppingCart}
      />
    </RightBlockContainer>
  );
};

export default RightBlock;

const RightBlockContainer = styled.div`
  flex: 2 1 auto;

  margin-left: -1px;

  border: 1px solid #e6e6e6;
  border-bottom: none;
`;
