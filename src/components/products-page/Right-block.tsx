import React from 'react';
import styled from 'styled-components/macro';
import GostList from './Gost-list';
import ProductsList from './Products-list';

const RightBlock = () => {
  return (
    <RightBlockContainer>
      <GostList />
      <ProductsList />
    </RightBlockContainer>
  );
};

export default RightBlock;

const RightBlockContainer = styled.div`
  flex: 1;
`;
