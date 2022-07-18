import React from 'react';
import { InputStyle, PageContent } from '../components';
import styled from 'styled-components/macro';
import Form from '../Form';
import useInput from '../../hooks/useInput';
import { Validation } from '../../utils/validation';
import { useAppDispatch, useAppSelector } from '../../store/store';
import useSelect from '../../hooks/useSelect';
import { productsSlice } from '../../store/reducers/products/products-slice';
import useFileInput from '../../hooks/useFileInput';
import checkLetter from '../../utils/check-letter';

enum Offer {
  Hit = 'о',
  Action = 'а',
}

const AddProductMain = () => {
  const dispatch = useAppDispatch();
  const { addProduct } = productsSlice.actions;
  const { products } = useAppSelector((state) => state.productsSlice);
  const { productType } = useAppSelector((state) => state.productsTypeSlice);
  const id = useInput('');
  const name = useInput('');
  const price = useInput('', Validation.numbers);
  const gost = useInput('');
  const type = useSelect('');
  const file = useFileInput();

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const idError =
      Validation.isEmpty(id.value) ||
      Validation.isRepeat('id', id.value, products);
    id.setError(idError);

    const nameError = Validation.isEmpty(name.value);
    name.setError(nameError);

    const gostError = Validation.isEmpty(gost.value);
    gost.setError(gostError);

    const priceError = Validation.isEmpty(price.value);
    price.setError(priceError);

    const typeError = Validation.isEmpty(type.value);
    type.setError(typeError);

    const error =
      !idError && !nameError && !gostError && !priceError && !typeError;

    if (error) {
      dispatch(
        addProduct({
          id: id.value,
          name: name.value,
          price: price.value,
          gost: gost.value,
          type: type.value,
          imgPath: file.path ? file.path : '',
          isHit: checkLetter(name.value, Offer.Hit),
          isAction: checkLetter(name.value, Offer.Action),
        }),
      );

      id.setValue('');
      name.setValue('');
      price.setValue('');
      gost.setValue('');
      type.setValue('');
      file.setValue('');
    }
  };

  return (
    <AddProductContent>
      <Form buttonText='Добавить' submit={submitHandler}>
        <AddProductLabel>
          <AddProductInput
            {...id}
            type='text'
            placeholder='Укажите идентификатор'
          />
          <p>{id.error}</p>
        </AddProductLabel>

        <AddProductLabel>
          <AddProductInput
            {...name}
            type='text'
            placeholder='Введите название'
          />
          <p>{name.error}</p>
        </AddProductLabel>

        <AddProductLabel>
          <AddProductSelect as='select' {...type}>
            {!productType.length && (
              <option value=''>Нет ни одного типа продукта</option>
            )}
            {productType.length && (
              <option value=''>Выберите тип продукта</option>
            )}
            {productType.length &&
              productType.map((item) => (
                <option value={item.nameType} key={item.idType}>
                  {item.nameType}
                </option>
              ))}
          </AddProductSelect>
          <p>{type.error}</p>
        </AddProductLabel>

        <AddProductLabel>
          <AddProductInput
            {...price}
            type='number'
            placeholder='Укажите цену'
            min='0'
            step='0.01'
          />
          <p>{price.error}</p>
        </AddProductLabel>

        <AddProductLabel>
          <AddProductInput {...gost} type='text' placeholder='Введите ГОСТ' />
          <p>{gost.error}</p>
        </AddProductLabel>

        <AddProductLabel>
          <AddProductInputFile
            onChange={file.onChange}
            value={file.value}
            type='file'
            accept='image/png, image/jpeg'
          />
          <p>{file.error}</p>
        </AddProductLabel>
      </Form>
    </AddProductContent>
  );
};

export default AddProductMain;

const AddProductContent = styled(PageContent)`
  padding: 20px;
`;

const AddProductLabel = styled.label`
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

const AddProductInput = styled(InputStyle)`
  padding: 12px;
  margin-bottom: 5px;
`;

const AddProductSelect = styled(InputStyle)`
  padding: 10px;
  margin-bottom: 5px;
`;

const AddProductInputFile = styled(InputStyle)`
  padding: 10px;
  margin-bottom: 5px;
`;
