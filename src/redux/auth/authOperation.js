import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const backend = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
});

const token = {
  set(token) {
    backend.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    backend.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await backend.post('/auth/register', credentials);

      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await backend.post('/auth/login', {
        name,
        email,
        password,
      });
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await backend.post(`/auth/logout`);
    token.unset();
  } catch (e) {
    return thunkAPI.rejectWithValue(
      e.message,
      toast.error('Oops. Something went wrong 😭')
    );
  }
});

async function refreshUser(sid, refreshToken) {
  const { data } = await backend({
    data: { sid },
    headers: { Authorization: refreshToken },
    method: 'post',
    url: `/auth/refresh`,
  });
  return data;
}

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    try {
      const { sid, refreshToken } = state.auth;
      if (!sid) return thunkAPI.rejectWithValue(toast.error(null));
      const result = await refreshUser(sid, refreshToken);

      token.set(result.newAccessToken);
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message, toast.error(null));
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'auth/getinfo',
  async (_, thunkAPI) => {
    try {
      const { data } = await backend.get('/user');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
