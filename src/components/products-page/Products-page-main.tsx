import React from 'react';
import styled from 'styled-components/macro';
import DisplayOn from './Display-on';
import LeftBlock from './Left-block';

import Pagination from './Pagination';
import RightBlock from './Right-block';

const ProductsPageMain = () => {
  return (
    <ProductsPageMainContainer>
      <ProductsPageContent>
        <LeftBlock />
        <RightBlock />
      </ProductsPageContent>

      <ProductsPageMainNav>
        <DisplayOn />
        <Pagination />
      </ProductsPageMainNav>
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

const ProductsPageMainNav = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 841px;
  margin: 0 0 0 auto;
  padding: 23px 0px 10px 3px;
`;
