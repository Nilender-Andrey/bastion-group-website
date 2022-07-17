import React from 'react';
import ProductsPageFooter from '../components/products-page/Products-page-footer';
import ProductsPageHead from '../components/products-page/Products-page-head';
import ProductsPageMain from '../components/products-page/Products-page-main';

const ProductsPage = () => {
  return (
    <>
      <ProductsPageHead />
      <ProductsPageMain />
      <ProductsPageFooter />
    </>
  );
};

export default ProductsPage;
