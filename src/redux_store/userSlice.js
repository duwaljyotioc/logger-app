import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    setUsers: (state, payloadAction) => {
      state.users = payloadAction.payload.users;
    }
  }
})

export const userActions = userSlice.actions;

export default userSlice;
