import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const usersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUsers: state => {
      state.users = [];
    },
    deleteUser: state => {
      state.users = [];
    },
  },
});

export const { setUsers, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
