import React from 'react';
import { InputStyle, PageContent } from '../components';
import styled from 'styled-components/macro';
import Form from '../Form';
import useInput from '../../hooks/useInput';
import { Validation } from '../../utils/validation';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { productsTypeSlice } from '../../store/reducers/products-type/products-type-slice';

const AddProductTypesMain = () => {
  const dispatch = useAppDispatch();
  const { addProductsType } = productsTypeSlice.actions;
  const { productType } = useAppSelector((state) => state.productsTypeSlice);
  const idType = useInput('');
  const nameType = useInput('');

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const idError =
      Validation.isEmpty(idType.value) ||
      Validation.isRepeat('idType', idType.value, productType);
    idType.setError(idError);

    const nameError =
      Validation.isEmpty(nameType.value) ||
      Validation.isRepeat('nameType', nameType.value, productType);
    nameType.setError(nameError);

    if (!idError && !nameError) {
      console.log('Все норм');
      idType.setValue('');
      nameType.setValue('');
      dispatch(
        addProductsType({ idType: idType.value, nameType: nameType.value }),
      );
    }
  };

  return (
    <AddProductTypesContent>
      <Form buttonText='Добавить' submit={submitHandler}>
        <AddProductTypesLabel>
          <AddProductTypesInput
            {...idType}
            type='text'
            placeholder='Идентификатор'
          />
          <p>{idType.error}</p>
        </AddProductTypesLabel>
        <AddProductTypesLabel>
          <AddProductTypesInput
            {...nameType}
            type='text'
            placeholder='Название'
          />
          <p>{nameType.error}</p>
        </AddProductTypesLabel>
      </Form>
    </AddProductTypesContent>
  );
};

export default AddProductTypesMain;

const AddProductTypesContent = styled(PageContent)`
  padding: 20px;
`;

const AddProductTypesLabel = styled.label`
  display: block;

  max-width: 480px;
  margin: 20px auto;
  text-align: left;

  p {
    padding-left: 10px;
    height: 14px;

    font-weight: 700;
    color: #c93e33;
  }
`;

const AddProductTypesInput = styled(InputStyle)`
  padding: 12px;
  margin-bottom: 5px;
`;
