import React, { FC, useRef, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import productImg from '../../assets/img/product.jpg';
import {
  ButtonStyle,
  OptionsButton,
  ProductCardCertificateStyle,
  ProductCardNameStyle,
  ProductCardPrice,
} from '../components';
import shoppingCartIcon from '../../assets/icon/shopping-cart.svg';
import starIcon from '../../assets/icon/star_grey.svg';
import useHover from '../../hooks/useHover';
import { IProduct, IShoppingCartItem } from '../../types/Product';
import Quantity from '../Quantity';
import { Validation } from '../../utils/validation';

interface IProductCardProps {
  product: IProduct;
  AddToShoppingCart: (value: IShoppingCartItem) => void;
}

const ProductCard: FC<IProductCardProps> = ({ product, AddToShoppingCart }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [quantity, setQuantity] = useState(1);
  const isHovering = useHover(ref);

  const clickHandler = () => {
    AddToShoppingCart({ product, quantity });
  };

  const changeQuantity = (newQuantity: number) => {
    setQuantity(Validation.quantity(newQuantity));
  };

  return (
    <ProductCardWrap>
      <ProductCardContainer ref={ref} isHovering={isHovering}>
        {isHovering && <ProductCardFavorites>В избранное</ProductCardFavorites>}
        <ProductCardDiscounts>
          {product.isHit && <DiscountHit>хит</DiscountHit>}
          {product.isAction && <Discount>скидка</Discount>}
          {/*  <DiscountSale>акция</DiscountSale> */}
        </ProductCardDiscounts>
        <ProductCardImgContainer>
          <img src={product.imgPath || productImg} alt={product.name} />
        </ProductCardImgContainer>

        <ProductCardCertificateStyle>
          {product.gost}
        </ProductCardCertificateStyle>
        <ProductCardNameStyle>{product.name}</ProductCardNameStyle>

        <ProductCardWrapPrice>
          <ProductCardPrice>{product.price} руб.</ProductCardPrice>
          {isHovering && (
            <Quantity changeQuantity={changeQuantity} quantity={quantity} />
          )}
        </ProductCardWrapPrice>
        {isHovering && (
          <>
            <ProductCardShoppingCartBtn onClick={clickHandler}>
              <img src={shoppingCartIcon} alt='' />В корзину
            </ProductCardShoppingCartBtn>
            <ProductCardInfoBtn>Подробнее</ProductCardInfoBtn>
          </>
        )}
      </ProductCardContainer>
    </ProductCardWrap>
  );
};

export default ProductCard;

const ProductCardWrap = styled.li`
  position: relative;

  width: 33.453%;
  height: 441px;

  margin: -1px 0px 0px -1px;
`;

const ProductCardContainer = styled.div<{ isHovering: boolean }>`
  ${(props) => {
    return props.isHovering
      ? css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;

          width: 100%;

          box-shadow: 0px 12px 12px 4px rgba(0, 0, 0, 0.1);
        `
      : css`
          position: relative;
          height: 441px;
        `;
  }}

  padding: 51px 20px 13px 20px;

  border: 1px solid #e6e6e6;
  background-color: #fff;

  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  letter-spacing: 0.009em;
  color: #000000;
`;

const ProductCardImgContainer = styled.div`
  width: 179px;
  height: 196px;
  margin: 0 auto 33px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductCardWrapPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 19px;
  margin-bottom: 30px;
`;

const ProductCardDiscounts = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1;
`;

const Discount = styled.div`
  padding: 5px 0 4px 0;
  width: 62px;
  height: 21px;
  margin-bottom: 15px;

  border-radius: 50px;
  background-color: #e67e22;

  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

const DiscountHit = styled(Discount)`
  width: 54px;

  background-color: #fd7272;
`;

/* const DiscountSale = styled(Discount)`
  width: 57px;
  background-color: #27ae60;
`; */

const ProductCardShoppingCartBtn = styled(ButtonStyle)`
  margin-bottom: 16px;

  img {
    margin-right: 15px;
  }
`;

const ProductCardInfoBtn = styled(ButtonStyle)`
  background-color: #efefef;

  font-weight: 400;
  color: #000000;
`;

const ProductCardFavorites = styled(OptionsButton)`
  position: absolute;
  top: 13px;
  right: 16px;

  justify-content: end;
  height: 20px;

  font-weight: 400;
  font-size: 12px;
  color: #b3b3b3;
  border-bottom: none;

  &:before {
    width: 13px;
    height: 13px;
    margin-right: 5px;

    background: url(${starIcon}) no-repeat center;
  }
`;
