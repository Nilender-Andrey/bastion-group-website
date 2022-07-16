import React from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle, OptionsButton } from '../components';
import filterIcon from '../../assets/icon/setting-config.svg';
import PriceFilter from './Price-filter';
import ProductTypeFilter from './Product-type-filter';
import BrandFilter from './Brand-filter';
import Checked from './Checked';

const Filters = () => {
  return (
    <FiltersContainer>
      <FiltersButton>Фильтры</FiltersButton>
      <PriceFilter />
      <ProductTypeFilter />
      <BrandFilter />
      <Checked title='Выбор покупателей' />
      <Checked title='Лучшая цена' bb='none' />

      <ResetFiltersButton>Сбросить фильтры</ResetFiltersButton>
    </FiltersContainer>
  );
};

export default Filters;

const FiltersContainer = styled.div`
  padding-top: 2px;
`;

const FiltersButton = styled(OptionsButton)`
  &:before {
    background: url(${filterIcon}) center no-repeat;
  }
`;

const ResetFiltersButton = styled(ButtonStyle)`
  display: block;
  margin: 14px auto;
  width: 229px;
  height: 47px;

  background: #ffffff;
  border: 1px solid #e6e6e6;

  font-weight: 400;
  letter-spacing: 0.009em;
  color: #b3b3b3;
`;
