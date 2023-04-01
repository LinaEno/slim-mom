import { createAsyncThunk } from '@reduxjs/toolkit';
import { backend } from 'redux/auth/authOperation';
import { toast } from 'react-toastify';

async function searchProduct(search) {
  const { data } = await backend.get('/product/', {
    params: {
      search,
    },
  });
  return data;
}

export const productSearch = createAsyncThunk(
  'products/productSearch',
  async search => {
    try {
      const result = await searchProduct(search);
      return result;
    } catch (e) {
      return e.message;
    }
  }
);

export async function addProductFunc(productInfo) {
  const { data } = await backend.post('/day', productInfo);
  return data;
}

export async function deleteProductFunc(productData) {
  const { data } = await backend.delete('/day', { data: productData });
  return data;
}

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (productInfo, { rejectWithValue }) => {
    try {
      const { day, daySummary, newDay, newSummary, eatenProduct } =
        await addProductFunc(productInfo);

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
      const result = await deleteProductFunc(productId);
      return result;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);

export async function getDayInfo(date) {
  const { data } = await backend.post('/day/info', date);
  return data;
}

export const getInfo = createAsyncThunk(
  'products/getDayInfo',
  async (dateInfo, { rejectWithValue }) => {
    try {
      const result = await getDayInfo(dateInfo);
      return result;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.warning('Спочатку розрахуйте денну норму калорій')
      );
    }
  }
);
