import { createAsyncThunk } from '@reduxjs/toolkit';
import { backend } from 'redux/auth/authOperation';
import { toast } from 'react-toastify';

export const productSearch = createAsyncThunk(
  'products/productSearch',
  async (search, { rejectWithValue }) => {
    try {
      const result = await backend.get('/product/', search);
      return result.data;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (productInfo, { rejectWithValue }) => {
    try {
      const { day, daySummary, newDay, newSummary, eatenProduct } =
        await backend.post('/day', productInfo);

      const result = {
        day: day || newDay,
        daySummary: daySummary || newSummary,
        eatenProduct: eatenProduct,
      };
      return result;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const result = await backend.delete('/day', productId);
      return result.data;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);
export const getInfo = createAsyncThunk(
  'products/getDayInfo',
  async (dateInfo, { rejectWithValue }) => {
    try {
      const result = await backend.post('/day', dateInfo);
      return result.data;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);
