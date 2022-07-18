import React from 'react';
import styled from 'styled-components/macro';
import { PageContent } from '../components';
import DisplayOn from './Display-on';
import LeftBlock from './Left-block';

import Pagination from './Pagination';
import RightBlock from './Right-block';

const ProductsPageMain = () => {
  return (
    <>
      <PageContent>
        <LeftBlock />
        <RightBlock />
      </PageContent>

      <ProductsPageMainNav>
        <DisplayOn />
        <Pagination />
      </ProductsPageMainNav>
    </>
  );
};

export default ProductsPageMain;

const ProductsPageMainNav = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 841px;
  margin: 0 0 0 auto;
  padding: 23px 0px 10px 3px;
`;
