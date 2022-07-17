import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Container } from './components/components';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AddProductTypesPage from './pages/Add-product-types-page';
import AddProductsPage from './pages/Add-products-page';
import ProductsPage from './pages/Products-page';
import ShoppingCartPage from './pages/Shopping-cart-page';

function App() {
  return (
    <AppStyle>
      <Header />
      <MainContainer>
        <Routes>
          <Route path='/' element={<ProductsPage />} />
          <Route path='shopping-cart' element={<ShoppingCartPage />} />
          <Route path='add-product-types' element={<AddProductTypesPage />} />
          <Route path='add-products' element={<AddProductsPage />} />
          <Route path='*' element={<ProductsPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`;

const MainContainer = styled(Container)`
  flex: 1;
  margin-bottom: 37px;
`;
