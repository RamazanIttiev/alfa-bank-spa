import { configureStore } from '@reduxjs/toolkit';
import posts from './postsSlice';
import favourites from './favouritesSlice';

export const store = configureStore({
  reducer: {
    posts,
    favourites,
  },
});
