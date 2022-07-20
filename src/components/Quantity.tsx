import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { ButtonStyle } from './components';

interface IQuantityProps {
  quantity: number;
  changeQuantity: (newQuantity: number) => void;
}

const Quantity: FC<IQuantityProps> = ({ quantity, changeQuantity }) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeQuantity(+event.target.value);
  };

  const increment = () => {
    changeQuantity(++quantity);
  };
  const decrement = () => {
    if (quantity <= 1) return;
    changeQuantity(--quantity);
  };

  return (
    <QuantityContainer>
      <QuantityBtn onClick={increment}>+</QuantityBtn>
      <QuantityInput
        type='number'
        value={quantity}
        onChange={onChangeHandler}
        min='1'
        step='1'
      />
      <QuantityBtn onClick={decrement}>-</QuantityBtn>
    </QuantityContainer>
  );
};

export default Quantity;

const QuantityContainer = styled.div`
  display: flex;

  width: 108px;
  height: 35px;

  overflow: hidden;
`;

const QuantityBtn = styled(ButtonStyle)`
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

const QuantityInput = styled.input`
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
