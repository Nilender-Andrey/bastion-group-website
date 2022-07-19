import React from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle, OptionsButton } from '../../components';
import filterIcon from '../../../assets/icon/setting-config.svg';
import PriceFilter from './Price-filter';

import BrandFilter from '../Brand-filter';
import Checked from '../Checked';
import ProductTypeFilter from './Product-type-filter';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import useSelect from '../../../hooks/useSelect';
import { productsSlice } from '../../../store/reducers/products/products-slice';

const Filters = () => {
  const dispatch = useAppDispatch();
  const {
    changeProductTypeFilter,
    changeMinPriceFilter,
    changeMaxPriceFilter,
  } = productsSlice.actions;
  const { productType } = useAppSelector((state) => state.productsTypeSlice);
  const { minPriceFilter, maxPriceFilter, minPrice, maxPrice } = useAppSelector(
    (state) => state.productsSlice,
  );
  const type = useSelect('');

  const changeMinPrice = (value: string) => {
    dispatch(changeMinPriceFilter(value));
  };
  const changeMaxPrice = (value: string) => {
    dispatch(changeMaxPriceFilter(value));
  };
  type.onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeProductTypeFilter(event.target.value));
    type.setValue(event.target.value);
  };

  const resetFilters = () => {
    dispatch(changeMinPriceFilter(''));
    dispatch(changeMaxPriceFilter(''));
    dispatch(changeProductTypeFilter(''));
    type.setValue('');
  };

  return (
    <FiltersContainer>
      <FiltersButton>Фильтры</FiltersButton>
      <PriceFilter
        min={minPrice}
        max={maxPrice}
        minPriceFilter={minPriceFilter}
        maxPriceFilter={maxPriceFilter}
        changeMinPrice={changeMinPrice}
        changeMaxPrice={changeMaxPrice}
      />
      <ProductTypeFilter productType={productType} type={type} />
      <BrandFilter />
      <Checked title='Выбор покупателей' />
      <Checked title='Лучшая цена' bb='none' />

      <ResetFiltersButton onClick={resetFilters}>
        Сбросить фильтры
      </ResetFiltersButton>
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
