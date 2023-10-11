import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {fetchProducts} from '../services';

export type Product = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
};

export type Cart = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

interface ProductState {
  data: Product[];
  cart: Cart[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
  data: [],
  cart: [],
  status: 'idle',
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetchProducts();
    return response.data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    addToCart: (state, action: PayloadAction<any>) => {
      return {...state, cart: action.payload};
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      return {...state, cart: action.payload};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const {setProductData, addToCart, removeFromCart} = productSlice.actions;

export const selectProductsList = (state: RootState) => state.product.data;

export default productSlice.reducer;
