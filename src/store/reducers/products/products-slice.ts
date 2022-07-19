import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/Product';

interface IProductState {
  products: IProduct[];
  gosts: string[];
  gostsSelected: string[];
  minPriceFilter: string;
  maxPriceFilter: string;
  minPrice: string;
  maxPrice: string;
  productTypeFilter: string;
  showProducts: IProduct[];
}

const initialState: IProductState = {
  products: [] as IProduct[],
  gosts: [],
  gostsSelected: [],
  minPriceFilter: '',
  maxPriceFilter: '',
  minPrice: '',
  maxPrice: '',
  productTypeFilter: '',
  showProducts: [] as IProduct[],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload];

      state.gosts = Array.from(new Set([...state.gosts, action.payload.gost]));

      const price = state.products.map((product) => +product.price);

      state.maxPriceFilter = state.maxPrice = Math.max(...price).toString();
      state.minPriceFilter = state.minPrice = Math.min(...price).toString();
    },
    select(state, action: PayloadAction<string>) {
      const value = action.payload;

      state.gostsSelected = state.gostsSelected.includes(value)
        ? state.gostsSelected.filter((item) => item !== value)
        : [...state.gostsSelected, action.payload];
    },
    changeProductTypeFilter(state, action: PayloadAction<string>) {
      state.productTypeFilter = action.payload;
    },
    changeMinPriceFilter(state, action: PayloadAction<string>) {
      state.minPriceFilter = action.payload;
    },
    changeMaxPriceFilter(state, action: PayloadAction<string>) {
      state.maxPriceFilter = action.payload;
    },

    changeShowProducts(state) {
      let showProducts = state.products.length
        ? state.products.filter((item) =>
            state.gostsSelected.includes(item.gost),
          )
        : state.products;

      showProducts = state.productTypeFilter
        ? showProducts.filter((item) => item.type === state.productTypeFilter)
        : showProducts;

      showProducts = showProducts.filter(
        (item) =>
          +item.price >= +(state.minPriceFilter || state.minPrice) &&
          +item.price <= +(state.maxPriceFilter || state.maxPrice),
      );

      state.showProducts = showProducts;

      const price = showProducts.map((product) => +product.price);

      state.maxPriceFilter = state.maxPrice = Math.max(...price).toString();
      state.minPriceFilter = state.minPrice = Math.min(...price).toString();
    },
  },
});

export default productsSlice.reducer;
