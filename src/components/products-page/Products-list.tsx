import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { IProduct } from '../../types/Product';
import ProductCard from './Product-card';

interface IProductsListProps {
  products: IProduct[];
}

const ProductsList: FC<IProductsListProps> = ({ products }) => {
  return (
    <ProductsListContainer>
      {products.length ? (
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <ProductsListMessage>Пока ничего нет</ProductsListMessage>
      )}
    </ProductsListContainer>
  );
};

export default ProductsList;

const ProductsListContainer = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  height: fit-content;
`;

const ProductsListMessage = styled.p`
  width: 100%;
  padding: 50px 0;

  text-align: center;

  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 1px;
  color: #000000;
`;
