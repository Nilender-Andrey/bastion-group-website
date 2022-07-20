import React from 'react';
import styled from 'styled-components/macro';
import { PageHeadContainer, PageTitle } from '../components';

const ShoppingCartHead = () => {
  return (
    <ShoppingCartContainer>
      <ShoppingCartPageTitle>Корзина</ShoppingCartPageTitle>
    </ShoppingCartContainer>
  );
};

export default ShoppingCartHead;

const ShoppingCartContainer = styled(PageHeadContainer)`
  margin-bottom: 25px;
`;

const ShoppingCartPageTitle = styled(PageTitle)`
  line-height: 47px;
`;
