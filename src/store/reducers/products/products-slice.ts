import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/Product';

interface IProductState {
  products: IProduct[];
}

const initialState: IProductState = {
  products: [] as IProduct[],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload];
    },
  },
});

export default productsSlice.reducer;
