import { combineReducers } from '@reduxjs/toolkit';
import productsTypeSlice from './products-type/products-type-slice';
import productsSlice from './products/products-slice';
import shoppingCartSlice from './shopping-cart/shopping-cart-slice';

const rootReducer = combineReducers({
  productsSlice,
  shoppingCartSlice,
  productsTypeSlice,
});

export default rootReducer;
