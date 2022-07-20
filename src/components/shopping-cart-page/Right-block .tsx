import React from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { useAppSelector } from '../../store/store';
import { PageTitle } from '../components';

const RightBlock = () => {
  const { sum } = useAppSelector((state) => state.shoppingCartSlice);

  const name = useInput('');
  const phone = useInput('');
  const email = useInput('');
  const organization = useInput('');

  return (
    <RightBlockContainer>
      <PlaceOrderTitle>Заказ</PlaceOrderTitle>
      <FormPlaceOrder>
        <FormPlaceOrderTitle>Контактная информация</FormPlaceOrderTitle>
        <FormPlaceOrderLabel>
          <FormPlaceOrderLabelTitle>ФИО</FormPlaceOrderLabelTitle>
          <FormPlaceOrderInput {...name} type='text' placeholder='ФИО' />
          <FormPlaceOrderErrorText>{name.error}</FormPlaceOrderErrorText>
        </FormPlaceOrderLabel>

        <TotalWrap>
          <TotalTitle>Итого</TotalTitle>
          <TotalSum>{sum} руб.</TotalSum>
        </TotalWrap>
      </FormPlaceOrder>
    </RightBlockContainer>
  );
};

export default RightBlock;

const RightBlockContainer = styled.div`
  flex: 0 0 280px;

  margin-left: -1px;

  border: 1px solid #e6e6e6;
  border-bottom: none;
`;

const FormPlaceOrder = styled.form`
  padding: 18px 20px 0 20px;
`;

const PlaceOrderTitle = styled(PageTitle)`
  padding: 9px 0 11px 19px;
  border-bottom: 1px solid #e6e6e6;

  font-size: 18px;
`;

const FormPlaceOrderTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.009em;

  color: #b3b3b3;
`;

const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const TotalTitle = styled(PageTitle)`
  font-size: 18px;
  color: #000000;
`;
const TotalSum = styled(PageTitle)`
  font-size: 18px;
  color: #c93e33;
`;

const FormPlaceOrderLabel = styled.label``;
const FormPlaceOrderInput = styled.input``;
const FormPlaceOrderErrorText = styled.input``;
const FormPlaceOrderLabelTitle = styled.input``;
