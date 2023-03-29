import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  getInfo,
  productSearch,
} from './operations';
import moment from 'moment';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsData: [],
    dayData: null,
    date: moment(new Date()).format('YYYY-MM-DD'),
    userInfo: null,
    eatenProducts: [],
    dayId: null,
    itemId: '',
    summary: null,
    page: 0,
    perPage: 5,
  },

  extraReducers: builder =>
    builder

      .addCase(productSearch.fulfilled, (state, { payload }) => {
        state.productsData = payload;
      })

      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.eatenProducts = [...state.eatenProducts, payload.eatenProduct];
        state.dayId = payload.day.id;
        state.itemId = payload.eatenProduct.id;
        state.summary = payload.daySummary;
      })

      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.eatenProducts = state.eatenProducts.filter(
          item => item.id !== payload.id
        );
      })
      .addCase(getInfo.fulfilled, (state, { payload }) => {
        state.eatenProducts = payload.eatenProducts || [];
        state.summary = payload.daySummary || payload;
        state.dayId = payload.id;
      }),
  reducers: {
    setDate(state, { payload }) {
      state.date = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    deleteUserInfo(state) {
      state.eatenProducts = [];
      state.summary = null;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const { setPage, setDate, deleteUserInfo } = productsSlice.actions;
