import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { backend } from 'redux/auth/authOperation';

export const dailyCalories = createAsyncThunk(
  'calories/dailyCalories',
  async (userInfo, { rejectWithValue }) => {
    try {
      userInfo.bloodType = Number(userInfo.bloodType);
      const response = await backend.post('/daily-rate', userInfo);
      return response.data;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);

export const dailyCaloriesId = createAsyncThunk(
  'calories/dailyCaloriesId',
  async (userInfo, { rejectWithValue }) => {
    try {
      userInfo.bloodType = Number(userInfo.bloodType);
      const response = await backend.post(`/daily-rate/${userInfo.userId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);
