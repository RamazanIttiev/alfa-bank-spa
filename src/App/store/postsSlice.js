import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, { payload }) => [...state, ...payload],
  },
});

export const { setPosts, deleteUser } = postsSlice.actions;

export default postsSlice.reducer;
