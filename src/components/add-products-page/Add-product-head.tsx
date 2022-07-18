import React from 'react';
import { PageHeadContainer, PageTitle } from '../components';
import BackButton from '../Back-button';

const AddProductHead = () => {
  return (
    <PageHeadContainer>
      <BackButton />
      <PageTitle>Продукты</PageTitle>
    </PageHeadContainer>
  );
};

export default AddProductHead;
