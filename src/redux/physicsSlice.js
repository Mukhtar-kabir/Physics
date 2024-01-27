import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const physicsSlice = createSlice({
  name: "physics",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      return {
        ...state,
        userInfo: null,
      };
    },
  },
});

export const { addUser, removeUser } = physicsSlice.actions;
export default physicsSlice.reducer;
