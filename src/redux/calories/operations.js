import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { backend } from 'redux/auth/authOperation';
import { omit } from 'lodash';

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

async function postInfo(userInfo) {
  const { data } = await backend.post(
    `/daily-rate/${userInfo.userId}`,
    omit(userInfo, ['userId'])
  );
  return data;
}

export const dailyCaloriesId = createAsyncThunk(
  'calories/dailyCaloriesId',
  async (userInfo, { rejectWithValue }) => {
    try {
      userInfo.bloodType = Number(userInfo.bloodType);
      // userInfo.weight = Number(userInfo.weight);
      // userInfo.height = Number(userInfo.height);
      // userInfo.desiredWeight = Number(userInfo.desiredWeight);
      // userInfo.age = Number(userInfo.age);
      const response = await postInfo(userInfo);
      console.log(response);
      return response;
    } catch (e) {
      return rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);
