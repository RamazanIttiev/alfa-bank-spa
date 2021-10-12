import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, { payload }) => (state = payload),

    removePost: (state, { payload }) => state.filter(post => post.id !== payload),
  },
});

export const { setPosts, removePost } = postsSlice.actions;

export default postsSlice.reducer;
