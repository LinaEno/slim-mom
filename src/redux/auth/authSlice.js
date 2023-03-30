import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
  getUserInfo,
} from './authOperation';

const initialState = {
  username: '',
  userEmail: '',
  userId: null,
  userData: {},
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: true,
  refreshToken: null,
  sid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.username = payload.user.username;
        state.userEmail = payload.email;
        state.userId = payload.id;
        state.isLoggedIn = true;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.username = payload.user.username;
        state.userEmail = payload.email;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.userId = payload.id;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoggedIn = false;
        state.username = '';
        state.userEmail = '';
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isRefreshing = false;
        state.userId = null;
        state.userData = {};
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.sid;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.accessToken = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.username = payload.username;
        state.userEmail = payload.email;
        state.userId = payload.id;
        state.userData = payload.userData;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
