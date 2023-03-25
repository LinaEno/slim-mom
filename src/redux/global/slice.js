import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { dailyCalories, dailyCaloriesId } from 'redux/calories/operations';
import {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
  getUserInfo,
} from 'redux/auth/authOperation';
import {
  addProduct,
  deleteProduct,
  getInfo,
  productSearch,
} from 'redux/diary/operations';

const initialState = {
  isModalOpen: false,
  isModalRecommendationOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
  error: null,
};

const extraActions = [
  dailyCalories,
  dailyCaloriesId,
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
  getUserInfo,
  addProduct,
  deleteProduct,
  getInfo,
  productSearch,
];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    openModalRecommendation(state) {
      state.isModalRecommendationOpen = true;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.isModalLogoutOpen = false;
      state.isModalRecommendationOpen = false;
    },
    
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const { openModal, openModalLogout, openModalRecommendation, closeModal } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
