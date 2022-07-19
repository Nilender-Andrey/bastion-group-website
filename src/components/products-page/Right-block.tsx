import React from 'react';
import styled from 'styled-components/macro';
import { productsSlice } from '../../store/reducers/products/products-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import GostList from './Gost-list';
import ProductsList from './Products-list';

const RightBlock = () => {
  const dispatch = useAppDispatch();
  const { select } = productsSlice.actions;
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

  return (
    <RightBlockContainer>
      <GostList
        gostsSelected={gostsSelected}
        gosts={gosts}
        clickHandler={gostClickHandler}
      />
      <ProductsList products={showProducts} />
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
