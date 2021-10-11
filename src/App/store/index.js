import { configureStore } from '@reduxjs/toolkit';
import posts from './postsSlice';

export const store = configureStore({
  reducer: {
    posts,
  },
});
