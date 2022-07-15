import { createSlice } from '@reduxjs/toolkit';
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
    reset(state) {
      state.products = [];
    },
  },
});

export default productsSlice.reducer;
