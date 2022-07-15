import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { InputStyle } from '../components';
import searchIcon from '../../assets/icon/search.svg';
import enterIcon from '../../assets/icon/enter.svg';

const Search: FC = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder='Поиск по названию...' />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 546px;
  margin-right: 44px;

  &:before {
    position: absolute;
    top: 11px;
    left: 18px;

    content: '';
    width: 16px;
    height: 16px;

    background: url(${searchIcon}) center no-repeat;
  }

  &::after {
    position: absolute;
    top: 11px;
    right: 16px;

    content: '';
    width: 20px;
    height: 20px;

    background: url(${enterIcon}) center no-repeat;
  }
`;

const SearchInput = styled(InputStyle)`
  &::placeholder {
    color: #b3b3b3;
  }
`;
