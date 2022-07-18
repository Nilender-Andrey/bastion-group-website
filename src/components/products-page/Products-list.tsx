import React from 'react';
import styled from 'styled-components/macro';
import ProductCard from './Product-card';

const ProductsList = () => {
  return (
    <ProductsListContainer>
      <ProductCard key={1} />
      <ProductCard key={2} />
      <ProductCard key={3} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductsListContainer>
  );
};

export default ProductsList;

const ProductsListContainer = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  height: fit-content;
`;
