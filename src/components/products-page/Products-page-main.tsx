import React from 'react';
import styled from 'styled-components/macro';
import LeftBlock from './Left-block';
import ProductsList from './Products-list';

const ProductsPageMain = () => {
  return (
    <ProductsPageMainContainer>
      <ProductsPageContent>
        <LeftBlock />
        <ProductsList />
      </ProductsPageContent>

      {/*   <ProductsPageMainNav /> */}
    </ProductsPageMainContainer>
  );
};

export default ProductsPageMain;
const ProductsPageMainContainer = styled.div`
  height: 100%;
`;
const ProductsPageContent = styled.div`
  display: flex;

  background-color: #ffffff;
  border: 1px solid #e6e6e6;
`;
