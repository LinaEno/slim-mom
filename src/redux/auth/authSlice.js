import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
  getUserInfo,
} from './authOperation';

const initialState = {
  userName: '',
  userEmail: '',
  userId: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.userName = payload.username;
        state.userEmail = payload.email;
        state.userId = payload.id;
      });
  },
});

export const authReducer = authSlice.reducer;
