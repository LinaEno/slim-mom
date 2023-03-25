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
  userData: {},
  token: null,
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
        state.userName = payload.username;
        state.userEmail = payload.email;
        state.userId = payload.user.id;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.userName = payload.user.username;
        state.userEmail = payload.user.email;
        state.token = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.userId = payload.user.id;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoggedIn = false;
        state.userName = '';
        state.userEmail = '';
        state.token = null;
        state.refreshToken = null;
        state.sid = null;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.sid;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.userName = payload.username;
        state.userEmail = payload.email;
        state.userId = payload.id;
        state.userData = payload.userData;
      });
  },
});

export const authReducer = authSlice.reducer;
