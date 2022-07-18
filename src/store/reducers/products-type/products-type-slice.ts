import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductType } from '../../../types/Product';

interface IProductTypeState {
  productType: IProductType[];
}

const initialState: IProductTypeState = {
  productType: [] as IProductType[],
};

export const productsTypeSlice = createSlice({
  name: 'products-type',
  initialState,
  reducers: {
    addProductsType(state, action: PayloadAction<IProductType>) {
      state.productType = [...state.productType, action.payload];
    },
  },
});

export default productsTypeSlice.reducer;
