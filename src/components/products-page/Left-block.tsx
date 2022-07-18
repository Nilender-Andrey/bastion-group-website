import React from 'react';
import styled from 'styled-components/macro';
import Categories from './Categories';
import Filters from './Filters';

const LeftBlock = () => {
  return (
    <LeftBlockContainer>
      <Categories />
      <Filters />
    </LeftBlockContainer>
  );
};

export default LeftBlock;

const LeftBlockContainer = styled.div`
  flex: 0 0 269px;

  height: 100%;

  border: 1px solid #e6e6e6;
  border-bottom: none;
`;
