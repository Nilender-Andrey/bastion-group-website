import React from 'react';
import styled from 'styled-components/macro';
import { useAppSelector } from '../../store/store';
import { Container } from '../components';
import Catalog from './Catalog';
import Favorites from './Favorites';
import Logo from './Logo';
import Search from './Search';
import ShoppingCart from './Shopping-cart';

const HeaderSecondBlock = () => {
  const { items } = useAppSelector((state) => state.shoppingCartSlice);

  return (
    <HeaderSecondBlockWrapper>
      <HeaderSecondBlockContainer>
        <Logo />
        <Catalog />
        <Search />
        <Favorites />
        <ShoppingCart quantity={items.length} />
      </HeaderSecondBlockContainer>
    </HeaderSecondBlockWrapper>
  );
};

export default HeaderSecondBlock;

const HeaderSecondBlockWrapper = styled.div`
  background-color: #fff;
`;

const HeaderSecondBlockContainer = styled(Container)`
  display: flex;
  align-items: center;

  padding: 16px 0 21px 0;
`;
