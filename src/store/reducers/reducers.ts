import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './products/products-slice';
import shoppingCartSlice from './shopping-cart/shopping-cart-slice';

const rootReducer = combineReducers({ productsSlice, shoppingCartSlice });

export default rootReducer;
