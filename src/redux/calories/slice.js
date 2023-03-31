import { createSlice } from '@reduxjs/toolkit';
import { dailyCaloriesId, dailyCalories } from './operations';

const initialState = {
  user: null,
  userId: null,
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState: initialState,

  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    filteredValue(state, { payload }) {
      state.filteredValue = { ...state.filteredValue, ...payload };
    },
  },

  extraReducers: builder =>
    builder
      .addCase(dailyCalories.fulfilled, (state, { payload }) => {
        state.user = payload;
      })

      .addCase(dailyCaloriesId.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.userId = payload.id;
      }),
});

export const caloriesReducer = caloriesSlice.reducer;

export const { setPage, filteredValue } = caloriesSlice.actions;
