import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const backend = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = {
  set(token) {
    backend.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    backend.defaults.headers.common.Authorization = '';
  },
};

const registerUser = async userData => {
  const { data } = await backend.post('/auth/register', userData);
  return data;
};

const login = async signedUserData => {
  const { data } = await backend.post('/auth/login', signedUserData);
  return data;
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credential, thunkAPI) => {
    try {
      const result = await registerUser(credential);

      thunkAPI.dispatch(
        logIn({ email: result.email, password: credential.password })
      );
      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭 in reg')
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const result = await login(credential);
      token.set(result.accessToken);
      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭 in log')
      );
    }
  }
);

export async function out() {
  const { data } = await backend.post(`/auth/logout`);
  return data;
}

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    const { token: accessToken } = state.auth;
    const result = await out();
    token.unset(accessToken);
    return result;
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
    try {
      const { sid, refreshToken } = state.auth;
      if (!sid) return thunkAPI.rejectWithValue('No sid');
      const result = await refreshUser(sid, refreshToken);
      token.set(result.newAccessToken);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

async function getUser() {
  const { data } = await backend.get(`/user`);
  return data;
}

export const getUserInfo = createAsyncThunk(
  'auth/getinfo',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const persistedToken = state.auth.accessToken;
      if (!persistedToken) {
        return thunkAPI.rejectWithValue('No token');
      }
      token.set(persistedToken);
      const result = await getUser();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
