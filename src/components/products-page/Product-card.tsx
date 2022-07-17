import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import productImg from '../../assets/img/product.jpg';
import { ButtonStyle, OptionsButton } from '../components';
import ProductCardQuantity from './Product-card-quantity';
import shoppingCartIcon from '../../assets/icon/shopping-cart.svg';
import starIcon from '../../assets/icon/star_grey.svg';
import useHover from '../../hooks/useHover';

const ProductCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHover(ref);

  console.log(isHovering);

  return (
    <ProductCardContainer ref={ref}>
      {isHovering && <ProductCardFavorites>В избранное</ProductCardFavorites>}
      <ProductCardDiscounts>
        <DiscountHit>хит</DiscountHit>
        <Discount>скидка</Discount>
        <DiscountSale>акция</DiscountSale>
      </ProductCardDiscounts>
      <ProductCardImgContainer>
        <img src={productImg} alt='' />
      </ProductCardImgContainer>

      <ProductCardCertificate>ГОСТ 14911-82</ProductCardCertificate>
      <ProductCardName>Опора тавровая хомутовая ТХ</ProductCardName>

      <ProductCardWrap>
        <ProductCardPrice>849.9 руб.</ProductCardPrice>
        {isHovering && <ProductCardQuantity />}
      </ProductCardWrap>
      {isHovering && (
        <>
          <ProductCardShoppingCartBtn>
            <img src={shoppingCartIcon} alt='Корзина' />В корзину
          </ProductCardShoppingCartBtn>
          <ProductCardInfoBtn>Подробнее</ProductCardInfoBtn>
        </>
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  position: relative;

  flex: 1;
  padding: 51px 20px 29px 20px;
  max-width: 280px;
  margin: -1px -1px -1px -1px;

  border: 1px solid #e6e6e6;

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
const ProductCardCertificate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  min-width: 83px;
  height: 20px;
  margin-bottom: 25px;

  background: #c93e331a;

  border-radius: 2px;

  color: #c93e33;
`;
const ProductCardName = styled.div`
  margin-bottom: 9px;

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const ProductCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 19px;
`;

const ProductCardPrice = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
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

const DiscountSale = styled(Discount)`
  width: 57px;
  background-color: #27ae60;
`;

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
