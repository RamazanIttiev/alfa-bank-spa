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
    removePost: (state, { payload }) => {
      state.posts = state.posts.filter(post => post.id !== payload.id);
    },
  },
});

export const { setPosts, removePost } = postsSlice.actions;

export default postsSlice.reducer;
