import React from 'react';
import { PageHeadContainer, PageTitle } from '../components';
import BackButton from '../Back-button';

const AddProductTypesHead = () => {
  return (
    <PageHeadContainer>
      <BackButton />
      <PageTitle>Типы продуктов</PageTitle>
    </PageHeadContainer>
  );
};

export default AddProductTypesHead;
