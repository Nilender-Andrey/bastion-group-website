import React from 'react';
import styled from 'styled-components/macro';
import { LinkBack, PageTitle } from '../components';
import sortIcon from '../../assets/icon/sort-one.svg';
import catalogIcon from '../../assets/icon/catalog.svg';
import listIcon from '../../assets/icon/list-top.svg';

const ProductsPageHead = () => {
  return (
    <ProductsPageHeadContainer>
      <LinkBack to='#!'></LinkBack>
      <PageTitle>Опоры трубопроводов</PageTitle>
      <SortButton>Сначала популярные</SortButton>
      <PreviewContainer>
        <PreviewButtonTable />
      </PreviewContainer>
    </ProductsPageHeadContainer>
  );
};

export default ProductsPageHead;

const ProductsPageHeadContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`;

const SortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin: 0 32px 0 auto;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.009em;

  color: #000000;

  &::after {
    content: '';
    width: 16px;
    height: 16px;

    background: url(${sortIcon}) center no-repeat;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  align-items: center;

  width: 43px;
  height: 18px;

  border-radius: 50px;

  background: #ffffff url(${listIcon}) 80% 55% no-repeat;
`;

const PreviewButtonTable = styled.div`
  width: 22px;
  height: 22px;

  background: #c93e33 url(${catalogIcon}) center/55% no-repeat;

  border-radius: 50%;
`;
