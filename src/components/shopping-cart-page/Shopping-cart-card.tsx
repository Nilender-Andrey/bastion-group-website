import React, { FC } from 'react';
import styled from 'styled-components/macro';
import productImg from '../../assets/img/product.jpg';
import {
  ButtonStyle,
  ProductCardCertificateStyle,
  ProductCardNameStyle,
  ProductCardPrice,
} from '../components';
import Quantity from '../Quantity';
import deleteIcon from '../../assets/icon/delete.svg';
import { IShoppingCartItem } from '../../types/Product';
import { Validation } from '../../utils/validation';

interface IShoppingCartCard {
  item: IShoppingCartItem;
  changeQuantityHandler: (id: string, quantity: number) => void;
  deleteProduct: (id: string) => void;
}

const ShoppingCartCard: FC<IShoppingCartCard> = ({
  item,
  changeQuantityHandler,
  deleteProduct,
}) => {
  const { id, name, price, gost, imgPath } = item.product;

  const changeQuantity = (newQuantity: number) => {
    const value = Validation.quantity(newQuantity);
    changeQuantityHandler(item.product.id, value);
  };

  const clickBtnDeleteHandler = () => {
    deleteProduct(id);
  };

  return (
    <ShoppingCartCardContainer>
      <ShoppingCartCardImageWrap>
        <img src={productImg} alt='' />
      </ShoppingCartCardImageWrap>

      <div>
        <ShoppingCartCardCertificate>{gost}</ShoppingCartCardCertificate>
        <ShoppingCartCardName>{name}</ShoppingCartCardName>
        <ShoppingCartCardPrice>{price} руб. </ShoppingCartCardPrice>
      </div>

      <ShoppingCartCardQuantityWrap>
        <Quantity changeQuantity={changeQuantity} quantity={item.quantity} />
      </ShoppingCartCardQuantityWrap>

      <ShoppingCartCardSum>{item.sum} руб.</ShoppingCartCardSum>

      <ShoppingCartCardDeleteBtn onClick={clickBtnDeleteHandler} />
    </ShoppingCartCardContainer>
  );
};

export default ShoppingCartCard;

const ShoppingCartCardContainer = styled.li`
  display: flex;
  align-items: center;

  padding: 30px 34px 30px 21px;

  border-bottom: 1px solid #e6e6e6;
`;

const ShoppingCartCardImageWrap = styled.div`
  max-width: 120px;
  height: 111px;

  margin-right: 40px;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

const ShoppingCartCardCertificate = styled(ProductCardCertificateStyle)`
  margin-bottom: 7px;
`;
const ShoppingCartCardName = styled(ProductCardNameStyle)`
  margin-bottom: 12px;
`;
const ShoppingCartCardPrice = styled(ProductCardPrice)`
  color: #b3b3b3;
`;

const ShoppingCartCardQuantityWrap = styled.div`
  margin: 0 41px 0 auto;
`;

const ShoppingCartCardSum = styled(ProductCardPrice)`
  margin-right: 50px;

  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.009em;
  color: #000000;
`;

const ShoppingCartCardDeleteBtn = styled(ButtonStyle)`
  padding: 5px;
  width: 28px;
  height: 28px;

  background: transparent url(${deleteIcon}) center no-repeat;
`;
