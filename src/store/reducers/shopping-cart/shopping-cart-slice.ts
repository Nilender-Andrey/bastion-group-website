import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/Product';

interface IShoppingCartItem {
  product: IProduct;
  quantity: number;
}

interface IShoppingCart {
  items: IShoppingCartItem[];
}

const initialState: IShoppingCart = {
  items: [] as IShoppingCartItem[],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    reset(state) {
      state.items = [];
    },
  },
});

export default shoppingCartSlice.reducer;
