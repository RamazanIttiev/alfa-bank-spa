import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export const { setPosts, deleteUser } = postsSlice.actions;

export default postsSlice.reducer;
