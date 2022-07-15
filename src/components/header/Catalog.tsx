import React from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle } from '../components';
import catalogIcon from '../../assets/icon/catalog.svg';

const Catalog = () => {
  return <CatalogButton>Каталог</CatalogButton>;
};

export default Catalog;

const CatalogButton = styled(ButtonStyle)`
  max-width: 145px;
  padding-right: 32px;
  margin-right: 20px;

  text-align: right;

  background: #c93e33 url(${catalogIcon}) 18% 45% no-repeat;
`;
