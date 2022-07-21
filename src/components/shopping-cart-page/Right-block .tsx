import React from 'react';
import styled from 'styled-components/macro';
import useInput from '../../hooks/useInput';
import { useAppSelector } from '../../store/store';
import { ButtonStyle, PageTitle } from '../components';
import userIcon from '../../assets/icon/user.svg';
import phoneIcon from '../../assets/icon/phone.svg';
import emailIcon from '../../assets/icon/e-mail.svg';
import briefcaseIcon from '../../assets/icon/briefcase.svg';
import shoppingCartIcon from '../../assets/icon/basket.svg';
import OfferIcon from '../../assets/icon/offer.svg';
import PlaceOrderInput from './Place-order-input';
import { Validation } from '../../utils/validation';

const RightBlock = () => {
  const { sum, items } = useAppSelector((state) => state.shoppingCartSlice);

  const name = useInput('');
  const phone = useInput('');
  const email = useInput('');
  const organization = useInput('');

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const nameError =
      Validation.isEmpty(name.value) ||
      Validation.minLength(name.value) ||
      Validation.maxLength(name.value);
    name.setError(nameError);

    const phoneError =
      Validation.isEmpty(phone.value) ||
      Validation.minLength(name.value) ||
      Validation.maxLength(name.value, 15);
    phone.setError(phoneError);

    const emailError =
      Validation.isEmpty(email.value) || Validation.email(email.value);
    email.setError(emailError);

    const organizationError = organization.value
      ? Validation.minLength(name.value) || Validation.maxLength(name.value)
      : '';
    organization.setError(organizationError);

    const error =
      !nameError && !phoneError && !emailError && !organizationError;

    if (error && items.length) {
      console.log({
        ФИО: name.value,
        'Контактный телефон': phone.value,
        Email: email.value,
        'Организация / ИНН': organization.value,
        Заказ: items.map(({ product, quantity }) => ({
          Товар: product.name,
          Цена: product.price,
          Количество: quantity,
        })),

        'Сумма заказа': sum,
      });
    }
  };

  return (
    <RightBlockContainer>
      <PlaceOrderTitle>Заказ</PlaceOrderTitle>
      <FormPlaceOrder onSubmit={submitHandler}>
        <FormPlaceOrderTitle>Контактная информация</FormPlaceOrderTitle>

        <PlaceOrderInput icon={userIcon} control={name} placeholder='ФИО' />

        <PlaceOrderInput
          icon={phoneIcon}
          control={phone}
          placeholder='Контактный телефон'
          type='tel'
        />

        <PlaceOrderInput
          icon={emailIcon}
          control={email}
          placeholder='Email'
          type='email'
        />

        <PlaceOrderInput
          icon={briefcaseIcon}
          control={organization}
          placeholder='Организация / ИНН'
        />

        <TotalWrap>
          <TotalTitle>Итого</TotalTitle>
          <TotalSum>{sum} руб.</TotalSum>
        </TotalWrap>
        <FormPlaceOrderButton type='submit'>
          <img src={shoppingCartIcon} alt='' />
          Оформить заказ
        </FormPlaceOrderButton>

        <FormPlaceOrderOfferButton>
          <img src={OfferIcon} alt='' />
          Коммерческое предложение
        </FormPlaceOrderOfferButton>
      </FormPlaceOrder>
    </RightBlockContainer>
  );
};

export default RightBlock;

const RightBlockContainer = styled.div`
  flex: 0 0 280px;

  margin-left: -1px;
  padding-bottom: 35px;

  border: 1px solid #e6e6e6;
  border-bottom: none;

  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.009em;
  color: #000000;
`;

const FormPlaceOrder = styled.form`
  padding: 18px 18px 0 20px;
`;

const PlaceOrderTitle = styled(PageTitle)`
  padding: 9px 0 11px 19px;
  border-bottom: 1px solid #e6e6e6;

  font-size: 18px;
`;

const FormPlaceOrderTitle = styled.p`
  margin-bottom: 20px;

  color: #b3b3b3;
`;

const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 47px 0 22px 0;
`;

const TotalTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
`;
const TotalSum = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #c93e33;
`;

const FormPlaceOrderButton = styled(ButtonStyle)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 3px 31px 3px 20px;
  margin: 0 0 16px 0;

  img {
    width: 18px;
    height: 18px;
  }
`;

const FormPlaceOrderOfferButton = styled(ButtonStyle)`
  display: flex;
  align-items: center;
  gap: 16px;

  height: 62px;
  padding: 0 0 0 28px;
  margin: 0 0 0 0;

  background-color: #fff;
  border: 1px solid #c93e33;

  color: #c93e33;
  text-align: left;

  + img {
    width: 30px;
    height: 33px;
  }
`;
