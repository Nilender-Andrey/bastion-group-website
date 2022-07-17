import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Validation } from '../../utils/validation';
import { ButtonStyle } from '../components';

const ProductCardQuantity = () => {
  const [value, setValue] = useState(1);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.round(+event.target.value);

    setValue(Validation.quantity(newValue));
  };

  const increment = () => {
    setValue((e) => ++e);
  };
  const decrement = () => {
    setValue((e) => Validation.quantity(--e));
  };

  return (
    <ProductCardQuantityContainer>
      <ProductCardQuantityBtn onClick={increment}>+</ProductCardQuantityBtn>
      <ProductCardQuantityInput
        type='number'
        value={value}
        onChange={onChangeHandler}
        min='1'
      />
      <ProductCardQuantityBtn onClick={decrement}>-</ProductCardQuantityBtn>
    </ProductCardQuantityContainer>
  );
};

export default ProductCardQuantity;

const ProductCardQuantityContainer = styled.div`
  display: flex;

  width: 108px;
  height: 35px;

  overflow: hidden;
`;

const ProductCardQuantityBtn = styled(ButtonStyle)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: inherit;
  border: 1px solid #e6e6e6;
  border-radius: 2px 0 0 2px;
  background: #ffffff;

  font-weight: 400;
  color: #000000;

  &:last-child {
    border-radius: 0 2px 2px 0;
  }
`;

const ProductCardQuantityInput = styled.input`
  width: 52px;

  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.009em;

  color: #000000;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
