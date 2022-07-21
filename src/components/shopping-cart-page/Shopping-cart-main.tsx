import React from 'react';
import styled from 'styled-components/macro';
import { PageContent } from '../components';
import LeftBlock from './Left-block';
import RightBlock from './Right-block ';

const ShoppingCartMain = () => {
  return (
    <ShoppingCartContent>
      <LeftBlock />
      <RightBlock />
    </ShoppingCartContent>
  );
};

export default ShoppingCartMain;

const ShoppingCartContent = styled(PageContent)`
  max-width: 1113px;
`;
