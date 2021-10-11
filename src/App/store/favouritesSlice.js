import { createSlice } from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addFavourites: (state, { payload }) => {
      state.push(payload);
    },
    removeFavourites: (state, { payload }) => state.filter(favouriteId => favouriteId !== payload),
  },
});

export const { addFavourites, removeFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
