import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShoppingCartItem } from '../../../types/Product';

interface IShoppingCart {
  items: IShoppingCartItem[];
  sum: number;
}

const initialState: IShoppingCart = {
  items: [] as IShoppingCartItem[],
  sum: 0,
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IShoppingCartItem>) {
      const product = state.items.find(
        (item) => item.product.id === action.payload.product.id,
      );

      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.items = [...state.items, action.payload];
      }
    },

    changeQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const product = state.items.find(
        (item) => item.product.id === action.payload.id,
      );

      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    calcSumItem(state) {
      state.items.forEach(
        (item) => (item.sum = (item.quantity * +item.product.price).toFixed(2)),
      );
    },
    calcSumAllItems(state) {
      state.sum = state.items.reduce(
        (sum, item) => (sum = +(sum + (item.sum ? +item.sum : 0)).toFixed(2)),
        0,
      );
    },

    deleteItem(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id,
      );
    },
  },
});

export default shoppingCartSlice.reducer;
