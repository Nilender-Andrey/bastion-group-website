import React from 'react';
import styled from 'styled-components/macro';
import ProductCard from './Product-card';

const ProductsList = () => {
  return (
    <ProductsListContainer>
      <ProductCard />
    </ProductsListContainer>
  );
};

export default ProductsList;

const ProductsListContainer = styled.div`
  flex: 1 1 auto;

  height: 100%;
`;
